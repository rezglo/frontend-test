import { createSlice } from '@reduxjs/toolkit'

const initialState = { chatType: '', customData: {}, messages: [], users: [] }

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setData(state, action) {
      const { chatType, customData, messages, users } = action.payload
      state.customData = customData
      state.chatType = chatType
      state.messages = messages || []
      state.users = users || []
    },
    clearData(state) {
      state.chatType = ''
      state.customData = {}
      state.messages = []
      state.users = []
    },
    addNewMessage(state, action) {
      const { message } = action.payload
      state.messages = [...state.messages, message]
    }
  }
})

export const { setData, clearData, addNewMessage } = chatSlice.actions
export default chatSlice.reducer
