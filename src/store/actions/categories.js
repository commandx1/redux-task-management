import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  TOGGLE_CATEGORY,
} from "../types";

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});
export const toggleCategory = (category) => ({
  type: TOGGLE_CATEGORY,
  payload: category,
});
export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  payload: category,
});
export const deleteCategory = (category) => ({
  type: DELETE_CATEGORY,
  payload: category,
});
