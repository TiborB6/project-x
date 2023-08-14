import { type ProductInterface } from '@/mongoDB/models/product'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CartArray extends Array<ProductInterface> {}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartArray,
  reducers: {
    addItem: (state, action: PayloadAction<ProductInterface>) => {
      state.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
