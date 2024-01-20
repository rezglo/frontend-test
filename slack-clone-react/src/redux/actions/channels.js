import { LocalStorageManager } from "../../lib/LocalStorageManager";
import {
  GET_CHANNELS_SUCCESS,
  GET_CHANNELS_FAIL,
  CREATE_CHANNEL_SUCCESS,
  CREATE_CHANNEL_FAIL,
  DELETE_CHANNEL_SUCCESS,
  DELETE_CHANNEL_FAIL,
  UPDATE_REVIEW_CHANNEL_SUCCESS,
  UPDATE_REVIEW_CHANNEL_FAIL,
  GET_REVIEW_CHANNEL_SUCCESS,
  GET_REVIEW_CHANNEL_FAIL,
} from "./types";

const users = LocalStorageManager.getItem("auths");
const access = localStorage.getItem("access");
const channel = LocalStorageManager.getItem("channel");

export const get_channels = (user_id) => async (dispatch) => {
  if (access) {
    try {
      const userChannels = users[user_id].channels;

      const res = {
        channels: userChannels,
      };

      if (res) {
        dispatch({
          type: GET_CHANNELS_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: GET_CHANNELS_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_CHANNELS_FAIL,
      });
    }
  }
};

export const create_channel =
  (user_id, name, messages = []) =>
  async (dispatch) => {
    if (access) {
      const userChannels = users[user_id].channels;
      const id = userChannels.length;

      const channel = {
        id,
        user_id,
        name,
        messages,
      };

      userChannels.push(channel);
      users[user_id].channels = userChannels;

      try {
        LocalStorageManager.setItem("auths", users);
        LocalStorageManager.setItem("channel", channel);

        const res = {
          data: {
            channel,
            channels: userChannels,
          },
        };

        if (res) {
          dispatch({
            type: CREATE_CHANNEL_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: CREATE_CHANNEL_FAIL,
          });
        }
      } catch (err) {
        dispatch({
          type: CREATE_CHANNEL_FAIL,
        });
      }
    }
  };

export const get_review_channel = (user_id) => async (dispatch) => {
  if (access && channel) {
    try {
      let res;

      if (channel.user_id === user_id) {
        const userChannel = users[user_id].channels[channel.id];
        res = { data: { channel: userChannel } };
      } else {
        const userChannel = users[user_id].channels[0];
        res = { data: { channel: userChannel } };
      }

      if (res) {
        dispatch({
          type: GET_REVIEW_CHANNEL_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_REVIEW_CHANNEL_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_REVIEW_CHANNEL_FAIL,
      });
    }
  }
};

export const update_review_channel = (user_id) => async (dispatch) => {
  if (access && channel) {
    try {
      let res;

      if (channel.user_id === user_id) {
        const channelToUdate = users[user_id].channels[channel.id];
        LocalStorageManager.setItem("channel", channelToUdate);
        res = { data: { channel: channelToUdate } };
      }

      if (res) {
        dispatch({
          type: UPDATE_REVIEW_CHANNEL_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: UPDATE_REVIEW_CHANNEL_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: UPDATE_REVIEW_CHANNEL_FAIL,
      });
    }
  }
};

export const delete_channel = (channel_id) => async (dispatch) => {
  if (access) {
    const userId = access.split("-")[0];
    const user = users[userId];

    user.channels.splice(channel_id, 1);
    users[userId] = user;

    try {
      LocalStorageManager.setItem("auths", users);

      if (users[userId].channels.length) {
        LocalStorageManager.setItem("channel", users[userId].channels[0]);
        dispatch(get_review_channel(userId));
      } else {
        LocalStorageManager.removeItem("channel");
      }

      const res = { data: { channels: user.channels, channel } };

      if (res) {
        dispatch({
          type: DELETE_CHANNEL_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: DELETE_CHANNEL_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: DELETE_CHANNEL_FAIL,
      });
    }
  }
};
