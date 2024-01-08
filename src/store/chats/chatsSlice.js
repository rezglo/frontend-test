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
        },
        deleteChannel: (state, {payload})=>{
            state.channels = state.channels.filter(channel=>channel.channelId !== payload);
            state.activeChat={}
        },
        sendMessageToChannel: (state, {payload})=>{

            const index = state.channels.findIndex(channel=>channel.channelId === payload.chatId)
            state.channels[index].channelTexts.push(payload.newMessage)
            state.activeChat.msgs.push(payload.newMessage)
            
        },
        sendPrivateMessage: (state, {payload})=>{
            state.dms.privateMessages.push(payload);
            state.activeChat.msgs.push(payload)
        }
    }

});

export const { createChannel, deleteChannel, loadChannels, loadDms, sendMessageToChannel, sendPrivateMessage, setActiveChat } = chatsSlice.actions;
export default chatsSlice.reducer;