package service

import (
	"context"
	"strings"

	"todo-backend/internal/domain"
	"todo-backend/internal/repository"
)

type TodoService struct {
	repo repository.TodoRepository
}

func NewTodoService(repo repository.TodoRepository) (*TodoService) {
	return &TodoService{
		repo: repo,
	}
}

func (s *TodoService) GetAll(ctx context.Context) ([]domain.Todo, error) {
	return s.repo.GetAll(ctx)
}

func (s *TodoService) GetById(ctx context.Context, id string) (domain.Todo, error) {
	return s.repo.GetById(ctx, id)
}

func (s *TodoService) Create(ctx context.Context, title, description string) (domain.Todo, error) {
	title = strings.TrimSpace(title)
	description = strings.TrimSpace(description)

	if title == "" {
		return domain.Todo{}, domain.ErrInvalidTodo
	}

	todo := domain.Todo {
		Title: 			title,
		Description: 	description,
		IsCompleted: 	false,
	}

	return s.repo.Create(ctx, todo)
}

func (s *TodoService) Update(ctx context.Context, id, title, description string, isCompleted bool) (domain.Todo, error) {
	title = strings.TrimSpace(title)
	description = strings.TrimSpace(description)

	if title == "" {
		return domain.Todo{}, domain.ErrInvalidTodo
	}

	existing, err := s.repo.GetById(ctx, id)

	if err != nil {
		return domain.Todo{}, err
	}

	existing.Title = title
	existing.Description = description
	existing.IsCompleted = isCompleted

	return s.repo.Update(ctx, existing)
}

func (s *TodoService) Delete(ctx context.Context, id string) error {
	return s.repo.Delete(ctx, id)
}