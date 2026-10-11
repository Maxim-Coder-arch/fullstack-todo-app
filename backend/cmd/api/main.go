package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"todo-backend/internal/repository/memory"
	"todo-backend/internal/service"
	transport "todo-backend/internal/transport/http"
)

func main() {
	repo := memory.NewTodoRepository()
	svc := service.NewTodoService(repo)
	handler := transport.NewTodoHandler(svc)
	router := transport.NewRouter(handler)

	httpHandler := transport.LoggingMiddleware(transport.CORSMiddleware(router))

	server := &http.Server{
		Addr:         ":80",
		Handler:      httpHandler,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	go func() {
		log.Printf("server starting on %s", server.Addr)
		if err := server.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("server error: %v", err)
		}
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)
	<-stop

	log.Println("shutting down...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Fatalf("shutdown error: %v", err)
	}

	log.Println("server stopped")
}