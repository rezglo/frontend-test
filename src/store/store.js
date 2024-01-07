import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authSlice';

const rootReducer = {
    auth
};

export const store = configureStore({ reducer: rootReducer })