import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './features/authentication/authenticationSlice'
import workSpaceReducer from './features/workSpace/workSpaceSlice'
import chatReducer from './features/chat/chatSlice'
import { apiSlice } from './features/api/apiSlice'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    workSpace: workSpaceReducer,
    chat: chatReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})
