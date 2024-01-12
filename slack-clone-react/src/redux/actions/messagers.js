import { LocalStorageManager } from "../../lib/LocalStorageManager";
import {
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL,
} from "./types";

const users = LocalStorageManager.getItem("auths");
const access = localStorage.getItem("access");

export const get_messages = (user_id, channel_id) => async (dispatch) => {
  if (access) {
    try {
      const usersCurrent = LocalStorageManager.getItem("auths");
      const userMessages = usersCurrent[user_id].channels[channel_id].messages;

      const res = {
        data: { messages: userMessages },
      };

      if (res) {
        dispatch({
          type: GET_MESSAGES_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_MESSAGES_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_MESSAGES_FAIL,
      });
    }
  }
};

export const create_message =
  (user_id, channel_id, message = "") =>
  async (dispatch) => {
    if (access) {
      try {
        const usersCurrent = LocalStorageManager.getItem("auths");
        const userMessages =
          usersCurrent[user_id].channels[channel_id].messages;
        const id = userMessages.length;

        const newMessage = {
          id,
          user: {
            id: usersCurrent[user_id].id,
            name: usersCurrent[user_id].first_name,
          },
          channel_id,
          message: message,
        };

        userMessages.push(newMessage);
        usersCurrent[user_id].channels[channel_id].messages = userMessages;

        LocalStorageManager.setItem("auths", usersCurrent);
        LocalStorageManager.setItem(
          "channel",
          usersCurrent[user_id].channels[channel_id]
        );

        const res = {
          data: {
            message: newMessage,
            messages: userMessages,
          },
        };

        if (res) {
          dispatch({
            type: CREATE_MESSAGE_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: CREATE_MESSAGE_FAIL,
          });
        }
      } catch (err) {
        dispatch({
          type: CREATE_MESSAGE_FAIL,
        });
      }
    }
  };

export const delete_message = (message_id) => async (dispatch) => {
  if (access) {
    const userId = access.split("-")[0];
    const user = users[userId];

    user.messages.splice(message_id, 1);
    users[userId] = user;

    try {
      LocalStorageManager.setItem("auths", users);

      const res = { data: { messages: user.messages } };

      if (res) {
        dispatch({
          type: DELETE_MESSAGE_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          tye: DELETE_MESSAGE_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        tye: DELETE_MESSAGE_FAIL,
      });
    }
  }
};
