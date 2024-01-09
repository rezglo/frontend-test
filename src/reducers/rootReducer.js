import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import  authReducer  from "./authReducer";
import chatReducer from "./chatReducer";
import channelReducer from "./channelReducer"; 

export const rootReducer = combineReducers({  
    ui: uiReducer,   
    auth : authReducer, 
    chat:chatReducer,  
    channel:channelReducer
})