import { configureStore, combineReducers } from '@reduxjs/toolkit'

const initialState = {
  theme: 'dark'
}

const TOGGLE_THEME = 'TOGGLE_THEME'
interface ToggleThemeAction {
  type: typeof TOGGLE_THEME
}

export const toggleTheme = (): ToggleThemeAction => {
  return { type: TOGGLE_THEME }
}

const themeReducer = (state = initialState, action: ToggleThemeAction): typeof initialState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  theme: themeReducer
})

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
