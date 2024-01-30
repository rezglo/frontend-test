import { createSlice } from '@reduxjs/toolkit'

const initialState = { activeWorkSpace: null, channels: [], directMessages: [] }

const workSpaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setWorkSpaceData(state, action) {
      const { channels, directMessages } = action.payload
      state.channels = channels || []
      state.directMessages = directMessages || []
    },
    setActiveWorkSpace(state, action) {
      const activeWorkSpace = action.payload
      state.activeWorkSpace = activeWorkSpace || null
    }
  }
})

export const { setWorkSpaceData, setActiveWorkSpace } = workSpaceSlice.actions
export default workSpaceSlice.reducer
