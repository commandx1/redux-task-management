import { GET_USER, REMOVE_USER } from "../types";

export const getUserFromLocalStorage = () => ({
  type: GET_USER,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
