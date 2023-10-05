import axios from "axios";
import { URL_BASE } from '../constants';

export const getUsers = (
  setIsLoadinUsers,
  dispatch,
  usersListAction,
  openNotificationSuccess,
  api
) => {
  setIsLoadinUsers(true);
  
  axios.get(`${URL_BASE}/users`).then((response) => {
      setTimeout(() => {  
        dispatch(usersListAction(response.data));
        setIsLoadinUsers(false);
        openNotificationSuccess(api, 'bottomRight', "Users loaded correctly.");
    }, 1500);
  }).catch(error => {
        console.log("error", error);
  });
};

 export const getSmsUsers = (
  setIsLoadingSms,
  dispatch,
  smsListAction,
  setListSms,
  smsList,
  openNotificationSuccess,
  api
 ) => {
  setIsLoadingSms(true);
  
  axios.get(`${URL_BASE}/messages`).then((response) => {
      setTimeout(() => {   
        dispatch(smsListAction(response.data));    
        setListSms(smsList);
        setIsLoadingSms(false);
        openNotificationSuccess(api, 'bottomRight', "Sms loaded correctly.");
    }, 1500);
  }).catch(error => {
        console.log("error", error);
  });
};