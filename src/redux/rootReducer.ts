import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import deviceReducer from './deviceSlice'
import authReducer from './authSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  device: deviceReducer,
  auth: authReducer
})

export default rootReducer
