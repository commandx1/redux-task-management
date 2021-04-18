import { GET_USER, REMOVE_USER } from "../types";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const user = JSON.parse(localStorage.getItem("user"));
      state = user !== null ? user : null;
      return state;
    case REMOVE_USER:
      state = null;
      return state;
    default:
      return state;
  }
};

export default reducer;
