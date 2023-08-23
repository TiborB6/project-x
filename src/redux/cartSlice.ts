import { type ProductInterface } from '@/mongoDB/models/product'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CartItem extends ProductInterface {
  quantity: number // Add quantity property
}

export type CartArray = CartItem[]

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartArray,
  reducers: {
    addItem: (state, action: PayloadAction<ProductInterface>) => {
      const existingItemIndex = state.findIndex(item => item.productID === action.payload.productID)

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase the quantity
        state[existingItemIndex].quantity++
      } else {
        // If the item doesn't exist, add it with quantity 1
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
