import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "_redux/slices/signInSlice";

const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
