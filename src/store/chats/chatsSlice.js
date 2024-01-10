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
        chatsLogout: (state)=>{
            return state = initialState
        },
        createChannel: (state, {payload})=>{
            state.channels.push(payload)
        },
        deleteChannel: (state, {payload})=>{
            state.channels = state.channels.filter(channel=>channel.channelId !== payload);
            state.activeChat={}
        },
        deleteMessageInChannel: (state, {payload})=>{
            // First, we find the index of the activeChannel in the channels array
            const index = state.channels.findIndex(channel=>channel.channelId === state.activeChat.info.chatId);
            
            // Then, we proceed to delete the channel from the array
            state.channels[index].channelTexts = state.channels[index].channelTexts.filter(text=> text.messageId !== payload);
            state.activeChat.msgs = state.activeChat.msgs.filter(text=> text.messageId !== payload)
        },
        deletePrivateMessage: (state, {payload})=>{
            state.dms.privateMessages = state.dms.privateMessages.filter(text=>text.messageId !== payload);
            state.activeChat.msgs = state.activeChat.msgs.filter(text=> text.messageId !== payload)
        },
        editMessageInChannel: ( state, {payload} )=>{
            
            // First, we find the index of the activeChannel in the channels array
            const channelIndex = state.channels.findIndex(channel=>channel.channelId === state.activeChat.info.chatId);
            // Then, after the channel is found, we find the index of the targeted text in the channelTexts array
            const targetMessageIndex = state.channels[channelIndex].channelTexts.findIndex(message=>message.messageId === payload.messageId);
            
            // Finally, we edit the message
            state.channels[channelIndex].channelTexts[targetMessageIndex].text = payload.text;            
            state.activeChat.msgs[targetMessageIndex].text = payload.text;

        },
        editPrivateMessage: ( state, {payload} )=>{
            // First, we find the index of the targeted message in the dms array
            const messageIndex = state.dms.privateMessages.findIndex(message => message.messageId === payload.messageId);
            // Then, we find the index of the targeted message in the msgs array on activeChat
            const messageIndexWhenActive = state.activeChat.msgs.findIndex(message => message.messageId === payload.messageId);

            // Finally, we edit the message
            state.dms.privateMessages[messageIndex].text = payload.text;
            state.activeChat.msgs[messageIndexWhenActive].text = payload.text;
        },
        sendMessageToChannel: (state, {payload})=>{

            // First, we find the index of the active channel in the channels array
            const index = state.channels.findIndex(channel=>channel.channelId === payload.chatId)
            // Then, we send the message
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
    chatsLogout,
    deleteChannel,
    deleteMessageInChannel,
    deletePrivateMessage,
    editMessageInChannel,
    editPrivateMessage, 
    loadChannels, 
    loadDms, 
    sendMessageToChannel, 
    sendPrivateMessage, 
    setActiveChat } = chatsSlice.actions;
export default chatsSlice.reducer;