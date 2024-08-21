import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  token: string
}

const initialState: CounterState = {
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    // decrement: (state) => {
    //   state.value -= 1
    // },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})
export const { setToken } = authSlice.actions

export default authSlice.reducer