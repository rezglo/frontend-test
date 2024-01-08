import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authSlice';
import chats from './chats/chatsSlice';

const rootReducer = {
    auth,
    chats
};

export const store = configureStore({ reducer: rootReducer })