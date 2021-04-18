import { DARK_MODE, GET_DM_FROM_LOCALSTORAGE } from "../types";

const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DM_FROM_LOCALSTORAGE:
      const darkMode = localStorage.getItem("darkMode");
      state = darkMode === "true" ? true : darkMode === "false" && false;
      return state;
    case DARK_MODE:
      localStorage.setItem("darkMode", !state);
      return !state;
    default:
      return state;
  }
};

export default reducer;
