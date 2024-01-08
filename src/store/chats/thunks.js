import { fetchChannels, fetchPrivateMessages } from "../../helpers/data-fetch"
import { createChannel, loadChannels, loadDms, sendMessageToChannel, sendPrivateMessage, setActiveChat } from "./chatsSlice";


export const startLoadingChats = ()=>{

    return async(dispatch, getState)=>{
        try {

            const { uid } = getState().auth
            
            const dms = await fetchPrivateMessages(uid);
            const channels = await fetchChannels();
            
            dispatch(loadChannels(channels));
            dispatch(loadDms(dms))

            console.log(contacts)
            


        } catch (error) {
            
        }
    }   
};

export const startCreatingChannel = (chatName)=>{
    return(dispatch)=>{
        
        const newChannel = {
            channelName: chatName,
            channelId: new Date().getTime(),
            channelTexts: []
        };

        dispatch(createChannel(newChannel))
        dispatch(setActiveChat(
            {
                info:{
                    chatName: newChannel.channelName,
                    chatId: newChannel.channelId,
                    type: 'channel'
                },
                msgs: newChannel.channelTexts
            }
        ))

    }
};

export const startSendingMessageToChannel = (text, senderId, chatId)=>{

    return (dispatch)=>{
        const newMessage = {
            text,
            messageId: new Date().getTime(),
            timestamp: new Date().getTime(),
            senderId,
        };
        dispatch(sendMessageToChannel({newMessage, chatId}))
    }

};

export const startSendingPrivateMessage = ( text, senderId, receiverId )=>{
    return (dispatch)=>{
        const newMessage = {
            text,
            senderId,
            receiverId,
            messageId: new Date().getTime(),
            timestamp: new Date().getTime()
        };

        dispatch(sendPrivateMessage(newMessage))

    }
}