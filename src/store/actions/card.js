import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  TOGGLE_TODO,
  ADD_TODO,
  GET_CARDS_BY_CATEGORY,
  DELETE_TODO,
  UPDATE_TODO,
} from "../types";

export const addCard = (card) => ({
  type: ADD_CARD,
  payload: card,
});

export const updateCard = (card) => ({
  type: UPDATE_CARD,
  payload: card,
});

export const deleteCard = (cardId) => ({
  type: DELETE_CARD,
  payload: cardId,
});

export const addTodo = (card) => ({
  type: ADD_TODO,
  payload: card,
});

export const toggleTodo = (card) => ({
  type: TOGGLE_TODO,
  payload: card,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});

export const getCardsByCategory = (category) => ({
  type: GET_CARDS_BY_CATEGORY,
  payload: category,
});
