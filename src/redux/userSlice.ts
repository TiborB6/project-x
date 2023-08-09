import type { UserInterface } from '@/mongoDB/models/user'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type UserState = UserInterface | null

const userSlice = createSlice({
  name: 'currentUser',
  initialState: null as UserState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserState>) => {
      return action.payload
    },
    removeCurrentUser: () => {
      return null
    }
  }
})

export const { setCurrentUser, removeCurrentUser } = userSlice.actions

export default userSlice.reducer
