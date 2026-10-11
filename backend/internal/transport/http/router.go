package http

import "net/http"

func NewRouter(handler *TodoHandler) http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /todos", handler.GetAll)
	mux.HandleFunc("POST /todos", handler.Create)
	mux.HandleFunc("GET /todos/{id}", handler.GetByID)
	mux.HandleFunc("PATCH /todos/{id}", handler.Update)
	mux.HandleFunc("DELETE /todos/{id}", handler.Delete)

	return mux
}