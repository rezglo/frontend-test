import { createSlice } from '@reduxjs/toolkit'

const initialState = { activeWorkSpace: null, channels: [], users: [] }

const workSpaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setWorkSpaceData(state, action) {
      const { channels, users } = action.payload
      state.channels = channels || []
      state.users = users || []
    },
    setActiveWorkSpace(state, action) {
      const activeWorkSpace = action.payload
      state.activeWorkSpace = activeWorkSpace || null
    }
  }
})

export const { setWorkSpaceData, setActiveWorkSpace } = workSpaceSlice.actions
export default workSpaceSlice.reducer
