// Import necessary functions from '@reduxjs/toolkit'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// Define the initial state for the theme
interface AppState {
  theme: string
  device: 'mobile' | 'desktop' // Use a union type to specify the possible values for device
}

const initialState: AppState = {
  theme: 'dark',
  device: 'desktop'
}

// Define the action type for toggling the theme
const TOGGLE_THEME = 'TOGGLE_THEME'
interface ToggleThemeAction { // Define the action interface for the ToggleThemeAction
  type: typeof TOGGLE_THEME
}

export const toggleTheme = (): ToggleThemeAction => { // Define the action creator function for toggling the theme
  return { type: TOGGLE_THEME }
}

const themeReducer = (state = initialState.theme, action: ToggleThemeAction): string => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light'
    default:
      return state
  }
}

// Mobile State
const TOGGLE_MOBILE = 'TOGGLE_MOBILE'
interface ToggleMobileAction {
  type: typeof TOGGLE_MOBILE
}

export const toggleMobile = (): ToggleMobileAction => {
  return { type: TOGGLE_MOBILE }
}

const mobileReducer = (state = initialState.device, action: ToggleMobileAction): 'mobile' | 'desktop' => {
  switch (action.type) {
    case TOGGLE_MOBILE: {
      return state === 'mobile' ? 'desktop' : 'mobile'
    }
    default:
      return state
  }
}

// Combine all reducers using combineReducers
const rootReducer = combineReducers({
  theme: themeReducer,
  device: mobileReducer
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
