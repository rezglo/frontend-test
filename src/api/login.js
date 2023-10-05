import axios from "axios";
import { URL_BASE } from '../constants';

export const getLogin = (
  setIsLoginig,
  dispatch,
  saveLoginData,
  setLogin,
  openNotificationSuccess,
  api,
  navigate
) => {
  setIsLoginig(true);
  
  axios.get(`${URL_BASE}/login`).then((response) => {
    setTimeout(() => {   
        dispatch(saveLoginData(response.data.data))   
        setAuthenticatedForCurrentUser({ status: true});
        setLogin(response.data);
        setIsLoginig(false);
        openNotificationSuccess(api, 'top', "authenticated user",  "Welcome to the FrontEnd/Test system.");
        navigate('/')
      }, 2000);
  }).catch(error => {
        console.log("error", error);
  });
};

export const setAuthenticatedForCurrentUser = (data) => {
  axios.put(`${URL_BASE}/isAuthenticated`, data).then((response) => {
      console.log("The user is authenticated");
  }).catch(error => {
      console.log("error", error);
  });
};