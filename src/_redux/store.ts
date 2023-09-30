import { configureStore } from '@reduxjs/toolkit'

import signInReducer from '_redux/slices/signInSlice'
import channelsReducer from '_redux/slices/channelsSlice'
import usersReducer from '_redux/slices/usersSlice'
import chatReducer from '_redux/slices/chatSlice'

const store = configureStore({
  reducer: {
    signIn: signInReducer,
    channels: channelsReducer,
    users: usersReducer,
    chat: chatReducer
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
