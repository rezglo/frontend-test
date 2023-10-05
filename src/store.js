import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './containers/Login/reducers/loginReducer';
import userListReducer from './containers/Users/reducers/userListReducer';
import smsListReducer from './containers/Users/reducers/smsListReducer';
import channelsListReducer from './containers/Channels/reducers/channelsListReducer';
import smsChannelsListReducer from './containers/Channels/reducers/smsChannelsListReducer';
import isAuthenticatedReducer from './containers/Login/reducers/isAuthenticatedReducer';

export default configureStore({
  reducer: {
    loging: loginReducer,
    isAuthenticated: isAuthenticatedReducer,
    usersList: userListReducer,
    smsList: smsListReducer,
    channelsList: channelsListReducer,
    smsChannelsList: smsChannelsListReducer
  }
})