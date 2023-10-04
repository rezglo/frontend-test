import { createSlice } from '@reduxjs/toolkit'

export const usersListReducer = createSlice({
  name: 'userList',
  initialState: {
    value:[]
  },
  reducers: {
    usersListAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { usersListAction } = usersListReducer.actions

export default usersListReducer.reducer