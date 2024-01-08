import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    channels: [],
    dms: {
        contacts: [],
        privateMessages: []
    },
    activeChat: {}
};

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        loadDms: (state, { payload })=>{
            state.dms = payload
        },
        loadChannels: (state, {payload})=>{
            state.channels = payload
        },
        setActiveChat: (state, {payload})=>{
            state.activeChat = payload
        },
        createChannel: (state, {payload})=>{
            state.channels.push(payload)
        }
    }

});

export const { createChannel, loadChannels, loadDms, setActiveChat } = chatsSlice.actions;
export default chatsSlice.reducer;