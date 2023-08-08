import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import deviceReducer from './deviceSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  device: deviceReducer
})

export default rootReducer
