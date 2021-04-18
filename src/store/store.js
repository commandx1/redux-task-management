import { createStore, combineReducers } from "redux";
import cardReducer from "./reducers/card";
import darkModeReducer from "./reducers/darkMode";
import userReducer from "./reducers/user";
import categoryReducer from "./reducers/categories";

function filteredReducer(state = { isFilterMode: false }, action) {
  switch (action.type) {
    case "filtered":
      return { isFilterMode: true };
    case "unFiltered":
      return { isFilterMode: false };
    default:
      return state;
  }
}

const reducers = combineReducers({
  cards: cardReducer,
  darkMode: darkModeReducer,
  user: userReducer,
  categories: categoryReducer,
  isFiltered: filteredReducer,
});

export const store = createStore(reducers);
