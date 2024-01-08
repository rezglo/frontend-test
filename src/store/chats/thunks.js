import { fetchChannels, fetchPrivateMessages } from "../../helpers/data-fetch"
import { loadChannels, loadDms } from "./chatsSlice";


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
}