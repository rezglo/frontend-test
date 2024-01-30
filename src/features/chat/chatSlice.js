import { createSlice } from '@reduxjs/toolkit'

const initialState = { chatType: '', customData: {}, messages: [], users: [], showOnMobile: false }

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setData(state, action) {
      const { chatType, customData, messages, users, showOnMobile } = action.payload
      state.customData = customData
      state.chatType = chatType
      state.messages = messages || []
      state.users = users || []
      state.showOnMobile = showOnMobile
    },
    clearData(state) {
      state.chatType = ''
      state.customData = {}
      state.messages = []
      state.users = []
      state.showOnMobile = false
    },
    addNewMessage(state, action) {
      const { message } = action.payload
      state.messages = [...state.messages, message]
    },
    setShowOnMobile(state, action) {
      const { showOnMobile } = action.payload
      state.showOnMobile = showOnMobile
    }
  }
})

export const { setData, clearData, addNewMessage, setShowOnMobile } = chatSlice.actions
export default chatSlice.reducer
