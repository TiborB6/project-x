import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authState',
  initialState: false,
  reducers: {
    toggleAuthState: (state) => !state
  }
})

export const { toggleAuthState } = authSlice.actions

export default authSlice.reducer
