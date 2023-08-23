import { combineReducers } from '@reduxjs/toolkit'
import deviceReducer from './deviceSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'

const rootReducer = combineReducers({
  device: deviceReducer,
  auth: authReducer,
  cart: cartReducer
})

export default rootReducer
