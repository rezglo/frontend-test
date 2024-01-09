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
        deleteMessageInChannel: (state, {payload})=>{
            const index = state.channels.findIndex(channel=>channel.channelId === state.activeChat.info.chatId);
            state.channels[index].channelTexts = state.channels[index].channelTexts.filter(text=> text.messageId !== payload);
            state.activeChat.msgs = state.activeChat.msgs.filter(text=> text.messageId !== payload)
        },
        deletePrivateMessage: (state, {payload})=>{
            state.dms.privateMessages = state.dms.privateMessages.filter(text=>text.messageId !== payload);
            state.activeChat.msgs = state.activeChat.msgs.filter(text=> text.messageId !== payload)
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

export const { 
    createChannel, 
    deleteChannel,
    deleteMessageInChannel,
    deletePrivateMessage, 
    loadChannels, 
    loadDms, 
    sendMessageToChannel, 
    sendPrivateMessage, 
    setActiveChat } = chatsSlice.actions;
export default chatsSlice.reducer;