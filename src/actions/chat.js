import { types } from "../types/types";
import data from "../data/users"
//import { messageService } from "../services/massageServices";


export const messageAddNew = (payload) => ({
    type: types.messageAddNew,
    payload: payload
});

const ListUsers = (payload) => ({
  type: types.chatListUser,
  payload: payload
});

export const ListStartUsers = () => {
  return async(dispatch) =>{
    // Simulating an asynchronous AJAX call with setTimeout
    try {    
      setTimeout(() => {  
      console.log(dispatch(ListUsers(data)))
      }, 1000); // Simulate a 1-second delay
    }
   catch (error) {}
  } 
};
export const messageStartAddNew = (message) => {
    return async(dispatch) =>{
    
    }
 };
 export const massageUpdate = (massage) => ({
    type: types.massageUpdate,
    payload: massage,
  });
  export const massageDelete = (id) => ({
    type: types.massageDelete,
    payload: id,
  });
  export const setActiveUser = (id) => ({
    type: types.setActiveUser,
    payload: id,
  });
  export const setActiveChannel = (id) => ({
    type: types.setActiveChannel,
    payload: id,
  });
  
  export const clearSetActiveUser= () => ({
    type: types.clearSetActiveUser,    
  });
  export const clearSetActiveChannel= () => ({
    type: types.clearSetActiveChannel,   
  });