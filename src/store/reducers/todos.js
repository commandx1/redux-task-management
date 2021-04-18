import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "../types";

const initialState = [
  {
    id: 11,
    description: "Redux çalışılacak",
    isCompleted: false,
    category: 1,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      state = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      return state;
    case UPDATE_TODO:
      state = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return state;

    default:
      return state;
  }
};

export default reducer;
