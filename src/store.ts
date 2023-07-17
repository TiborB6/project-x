import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark"
};

const TOGGLE_THEME = "TOGGLE_THEME";
interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
} 

export const toggleTheme = (): ToggleThemeAction => {
  return { type: TOGGLE_THEME };
};

const themeReducer = (state = initialState, action: ToggleThemeAction) => {
  switch (action.type){
  case TOGGLE_THEME:
    return { ...state, theme: state.theme === "light" ? "dark" : "light" };
  default:
    return state;
  }  
};

const rootReducer = {
  theme: themeReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;