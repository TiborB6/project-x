import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import deviceReducer from './deviceSlice'
import authStateReducer from './authSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  device: deviceReducer,
  auth: authStateReducer
})

export default rootReducer
