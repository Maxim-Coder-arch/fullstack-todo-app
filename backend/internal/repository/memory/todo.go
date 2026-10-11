package memory

import (
	"context"
	"strconv"
	"sync"
	"time"
	"todo-backend/internal/domain"
)

type TodoRepository struct {
	mu		sync.RWMutex
	todos 	[]domain.Todo
	nextID 	int
}

func NewTodoRepository() *TodoRepository {
	return &TodoRepository{
		todos: make([]domain.Todo, 0),
		nextID: 1,
	}
}

func (r *TodoRepository) GetAll(_ context.Context) ([]domain.Todo, error) {
	r.mu.RLock()

	defer r.mu.RUnlock()

	result := make([]domain.Todo, len(r.todos))

	copy(result, r.todos)

	return result, nil
}

func (r *TodoRepository) GetById(_ context.Context, id string) (domain.Todo, error) {
	r.mu.RLock()

	defer r.mu.RUnlock()

	for _, todo := range r.todos {
		if todo.ID == id {
			return todo, nil
		}
	}

	return domain.Todo{}, domain.ErrTodoNotFound
}

func (r *TodoRepository) Create(_ context.Context, todo domain.Todo) (domain.Todo, error) {
	r.mu.Lock()

	defer r.mu.Unlock()

	todo.ID = strconv.Itoa(r.nextID)
	r.nextID++

	now := time.Now().UTC()
	todo.CreatedAt = now
	todo.UpdatedAt = now

	r.todos = append(r.todos, todo)

	return todo, nil
}

func (r *TodoRepository) Update(_ context.Context, todo domain.Todo) (domain.Todo, error) {
	r.mu.Lock()

	defer r.mu.Unlock()

	for i, existing := range r.todos {
		if existing.ID == todo.ID {
			todo.CreatedAt = existing.CreatedAt
			todo.UpdatedAt = time.Now().UTC()

			r.todos[i] = todo

			return todo, nil
		}
	}

	return domain.Todo{}, domain.ErrTodoNotFound
}

func (r *TodoRepository) Delete(_ context.Context, id string) (error) {
	r.mu.Lock()

	defer r.mu.Unlock()

	for i, todo := range r.todos {
		if todo.ID == id {
			r.todos = append(r.todos[:i], r.todos[i + 1:]...)

			return nil
		}
	}

	return domain.ErrTodoNotFound
}