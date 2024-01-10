import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checking: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: ( state, {payload} )=>{
            return state = {
                checking: false,
                ...payload
            }
        },
        authLogout: (state)=>{
            return state = {
                checking: false
            }
        },
        authStartChecking: (state)=>{
            state.checking = true;
        },
        authDoneChecking: (state)=>{
            state.checking = false;
        }
    }
});

export const { authLogin, authLogout, authStartChecking, authDoneChecking } = authSlice.actions;
export default authSlice.reducer;