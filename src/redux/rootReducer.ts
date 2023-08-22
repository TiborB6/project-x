import { combineReducers } from '@reduxjs/toolkit'
import deviceReducer from './deviceSlice'
import authReducer from './authSlice'

const rootReducer = combineReducers({
  device: deviceReducer,
  auth: authReducer
})

export default rootReducer
