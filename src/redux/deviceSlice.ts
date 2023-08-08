import { createSlice } from '@reduxjs/toolkit'

interface DeviceState {
  device: 'mobile' | 'desktop'
}

const initialState: DeviceState = {
  device: 'desktop'
}

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    toggleMobile: (state) => {
      state.device = state.device === 'mobile' ? 'desktop' : 'mobile'
    }
  }
})

export const { toggleMobile } = deviceSlice.actions

export default deviceSlice.reducer
