import { createSlice } from '@reduxjs/toolkit'

const deviceSlice = createSlice({
  name: 'device',
  initialState: 'desktop', // Initial state is a string, not an object
  reducers: {
    toggleMobile: (state) => {
      return state === 'desktop' ? 'mobile' : 'desktop'
    }
  }
})

export const { toggleMobile } = deviceSlice.actions

export default deviceSlice.reducer
