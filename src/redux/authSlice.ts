import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    _id: '',
    auth: false
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state._id = action.payload
      state.auth = true
    },
    clearCurrentUser: (state) => {
      state._id = ''
      state.auth = false
    }
  }
})

export const { setCurrentUser, clearCurrentUser } = authSlice.actions

export default authSlice.reducer
