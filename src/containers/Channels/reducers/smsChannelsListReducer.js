import { createSlice } from '@reduxjs/toolkit'

export const smsChannelsListReducer = createSlice({
  name: 'smsChannelsList',
  initialState: {
    value:[]
  },
  reducers: {
    smsChannelsListAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { smsChannelsListAction } = smsChannelsListReducer.actions

export default smsChannelsListReducer.reducer