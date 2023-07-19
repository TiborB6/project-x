import { configureStore, combineReducers } from '@reduxjs/toolkit'

// Define the initial state for the theme
const initialState = {
  theme: 'dark'
}

// Define the action type for toggling the theme
const TOGGLE_THEME = 'TOGGLE_THEME'

// Define the action interface for the ToggleThemeAction
interface ToggleThemeAction {
  type: typeof TOGGLE_THEME
}

// Define the action creator function for toggling the theme
export const toggleTheme = (): ToggleThemeAction => {
  return { type: TOGGLE_THEME }
}

// Define the themeReducer to handle the theme state changes
const themeReducer = (state = initialState, action: ToggleThemeAction): typeof initialState => {
  switch (action.type) {
    // When TOGGLE_THEME action is dispatched, toggle the theme between 'light' and 'dark'
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}

// Combine all reducers using combineReducers
const rootReducer = combineReducers({
  theme: themeReducer
})

// Configure the Redux store with the rootReducer
const store = configureStore({
  reducer: rootReducer
})

// Define types for RootState and AppDispatch based on the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Export the store
export default store
