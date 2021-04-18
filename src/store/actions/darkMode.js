import { DARK_MODE, GET_DM_FROM_LOCALSTORAGE } from "../types";

export const getDmFromLocalStorage = () => ({
  type: GET_DM_FROM_LOCALSTORAGE,
});

export const darkModeHandler = () => ({
  type: DARK_MODE,
});
