package domain

import (
	"time"
	"errors"
)

var (
	ErrTodoNotFound = errors.New("todo not found")
	ErrInvalidTodo  = errors.New("invalid todo")
)

type Todo struct {
	ID          string
	Title       string
	Description string
	IsCompleted bool
	CreatedAt   time.Time
	UpdatedAt   time.Time
}