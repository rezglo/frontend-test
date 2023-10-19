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
    channelAddAction: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    channelDeleteAction: (state, action) => {
      state.value = state.value.filter((elemento) => elemento.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { channelsListAction, channelAddAction, channelDeleteAction } = channelsListReducer.actions

export default channelsListReducer.reducer