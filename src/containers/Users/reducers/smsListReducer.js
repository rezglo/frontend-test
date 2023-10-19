import { createSlice } from '@reduxjs/toolkit'

export const smsListReducer = createSlice({
  name: 'smsList',
  initialState: {
    value:[]
  },
  reducers: {
    smsListAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { smsListAction } = smsListReducer.actions

export default smsListReducer.reducer