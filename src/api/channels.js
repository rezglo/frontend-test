import axios from "axios";
import { URL_BASE } from '../constants';

export const getChannels = (
    setIsLoadingChannels, 
    openNotificationSuccess, 
    dispatch, 
    channelsListAction,
    api,
) => {
    setIsLoadingChannels(true);

    openNotificationSuccess(api, 'bottomRight', "Users loaded correctly.");
    axios.get(`${URL_BASE}/channels`).then((response) => {
        setTimeout(() => {  
          dispatch(channelsListAction(response.data));
          setIsLoadingChannels(false);
          openNotificationSuccess(api, 'bottomRight', "Channels loaded correctly.");
      }, 1500);
    }).catch(error => {
          console.log("error", error);
    });
  };

export const getSmsChannel = (
    setIsLoadingSmsChannel,
    dispatch,
    smsChannelsListAction,
    setListSms,
    smsList,
    openNotificationSuccess,
    api
  ) => {
    setIsLoadingSmsChannel(true);
    
    axios.get(`${URL_BASE}/channelMessages`).then((response) => {
        setTimeout(() => {  
          dispatch(smsChannelsListAction(response.data));     
          setListSms(smsList);
          setIsLoadingSmsChannel(false);
          openNotificationSuccess(api, 'bottomRight', "Sms channel loaded correctly.");
      }, 1500);
    }).catch(error => {
          console.log("error", error);
    });
  };

export const createChannel = (data) => {
    console.log("data",data);

    axios.post(`${URL_BASE}/channels`, data).then((response) => {
        console.log("Channel created correctly.");
    }).catch(error => {
        console.log("error", error);
    });
};

export const deleteChannel = (id) => {
    axios.delete(`${URL_BASE}/channels/${id}`).then((response) => {
        console.log("Channel deleted correctly.");
    }).catch(error => {
        console.log("error", error);
    });
};