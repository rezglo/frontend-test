import { types } from "../types/types";
import { authService } from "../services/authService";
import { history } from '../helpers/history';
import { uiOpenAlert } from "./ui";
import { v4 as uuid } from 'uuid';

export const startlogin = (username, password) => {
    return async (dispatch) => {
      try {   
           const data={
            id: uuid(),      
            avatar:'/static/images/avatars/avatar_1.png',
            username:'@JoseMa'
           };     
           localStorage.setItem('user', JSON.stringify(data));  
           //localStorage.setItem('token', response.data.token.key);        
           dispatch(authLoggin(data));
           history.push('/');       
      } catch (error) {
        dispatch(uiOpenAlert('error',error.response.data.error))       
      }
    };
  };
  const authLoggin = (event) => ({
    type: types.authLoggin,
    payload: event,
  });
  // export const StartChangePassword = (olpassword, newpassword) =>{
  //   return async (dispatch) => {
  //     try{
  //       const response = await authService.changePassword(olpassword, newpassword);
  //       if(response.status === 200){
  //         dispatch(ChangePassword());
  //         dispatch(uiOpenAlert('success', 'Your password have been changed'))
  //        }
  //     } catch(error){
  //       dispatch(uiOpenAlert('error',error.response.data.error))  
  //     }
  //   }
  // }
  
  // const ChangePassword = () => ({
  //   type: types.authChangePassword,
  // });
  // export const StartUpdateProfile = (user) =>{
  //   return async (dispatch) => {
  //     try{
  //       const response = await authService.updateProfile(user);
  //       if(response.status === 200){
  //         dispatch(UpdateProfile(user));
  //         localStorage.setItem('user', JSON.stringify(response.data.user)); 
  //       }
  //     } catch(error){
  //       dispatch(uiOpenAlert('error',error.response.data.error))  
  //     }
  //   }
  // }
  
  // const UpdateProfile = (user) => ({
  //   type: types.authUpdateProfile,
  //   payload: user
  // });
 
  export const startLogout = (username, password) => {
    return async (dispatch) => {
      try {        
           localStorage.removeItem('user');  
           //localStorage.removeItem('token');        
           dispatch(authLogout());
           history.push('/');        
      } catch (error) {
        //dispatch(uiOpenAlert('error',error.response.data.error))       
      }
    };
  };
  const authLogout = () => ({
    type: types.authLogout,   
  });