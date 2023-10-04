import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './containers/Login/reducer';
import userListReducer from './containers/Users/reducers/userListReducer';
import smsListReducer from './containers/Users/reducers/smsListReducer';
import channelsListReducer from './containers/Channels/reducers/channelsListReducer';
import smsChannelsListReducer from './containers/Channels/reducers/smsChannelsListReducer';

export default configureStore({
  reducer: {
    loging: loginReducer,
    usersList: userListReducer,
    smsList: smsListReducer,
    channelsList: channelsListReducer,
    smsChannelsList: smsChannelsListReducer
  }
})