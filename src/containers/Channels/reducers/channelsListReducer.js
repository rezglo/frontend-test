import { createSlice } from '@reduxjs/toolkit'

export const channelsListReducer = createSlice({
  name: 'channelsList',
  initialState: {
    value:[]
  },
  reducers: {
    channelsListAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { channelsListAction } = channelsListReducer.actions

export default channelsListReducer.reducer