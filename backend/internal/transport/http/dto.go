package http

import (
	"time"
	"todo-backend/internal/domain"
)

type createTodoRequest struct {
	Title			string 	`json:"title"`
	Description		string `json:"description"`
}

type updateTodoRequest struct {
	Title 			string `json:"title"`
	Description 	string `json:"description"`
	IsCompleted 	bool `json:"isCompleted"`
}

type todoResponse struct {
	ID          	string    `json:"id"`
	Title       	string    `json:"title"`
	Description 	string    `json:"description"`
	IsCompleted 	bool      `json:"isCompleted"`
	CreatedAt   	time.Time `json:"createdAt"`
	UpdatedAt   	time.Time `json:"updatedAt"`
}

func toTodoReponse(t domain.Todo) (todoResponse) {
	return todoResponse {
		ID:          t.ID,
		Title:       t.Title,
		Description: t.Description,
		IsCompleted: t.IsCompleted,
		CreatedAt:   t.CreatedAt,
		UpdatedAt:   t.UpdatedAt,
	}
}

func toTodoReponses(todos []domain.Todo) []todoResponse {
	result := make([]todoResponse, len(todos))

	for i, t := range todos {
		result[i] = toTodoReponse(t)
	}

	return result
}