import { fetchChannels, fetchPrivateMessages } from "../../helpers/data-fetch"
import { createChannel, loadChannels, loadDms, setActiveChat } from "./chatsSlice";


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
}