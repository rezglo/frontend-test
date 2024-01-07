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
        authStartChecking: (state)=>{
            state.checking = true;
        },
        authDoneChecking: (state)=>{
            state.checking = false;
        }
    }
});

export const { authLogin, authStartChecking, authDoneChecking } = authSlice.actions;
export default authSlice.reducer;