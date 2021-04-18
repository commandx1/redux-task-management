import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  TOGGLE_CATEGORY,
  DELETE_CATEGORY,
} from "../types";

const initialState = [{ isActive: false, title: "Eğitim" }];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      const updated = state.filter(
        (category) =>
          category.title.toLowerCase() !== action.payload.toLowerCase()
      );
      state = [...updated, { isActive: false, title: action.payload }];
      return state;

    case TOGGLE_CATEGORY:
      state = state.map((category) =>
        category.title.toLowerCase() === action.payload.toLowerCase()
          ? { ...category, isActive: !category.isActive }
          : category
      );
      return state;
    case UPDATE_CATEGORY:
      state = state.map((category) =>
        category.title.toLowerCase() === action.payload.toLowerCase()
          ? { ...category, title: action.payload }
          : category
      );
      return state;
    case DELETE_CATEGORY:
      const updatedCategories = state.filter(
        (category) =>
          category.title.toLowerCase() !== action.paylaod.toLowerCase()
      );
      state = updatedCategories;
      return state;
    default:
      return state;
  }
};

export default reducer;
