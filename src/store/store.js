import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authSlice';
import chats from './chats/chatsSlice';
import ui from './ui/uiSlice';

const rootReducer = {
    auth,
    chats,
    ui
};

export const store = configureStore({ reducer: rootReducer })