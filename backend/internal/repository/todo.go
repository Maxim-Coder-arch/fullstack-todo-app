package repository

import (
	"context"
	"todo-backend/internal/domain"
)

type TodoRepository interface {
	GetAll(ctx context.Context) ([]domain.Todo, error)
	GetById(ctx context.Context, id string) (domain.Todo, error)
	Create(ctx context.Context, todo domain.Todo) (domain.Todo, error)
	Update(ctx context.Context, todo domain.Todo) (domain.Todo, error)
	Delete(ctx context.Context, id string) (error)
}