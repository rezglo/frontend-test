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
} from "../actions/types";

const intitialState = {
  channels: LocalStorageManager.getItem("channels"),
  channel: LocalStorageManager.getItem("channel"),
};

export default function Channels(state = intitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: payload.channels,
      };
    case GET_CHANNELS_FAIL:
      return {
        ...state,
        channels: [],
      };
    case CREATE_CHANNEL_SUCCESS:
      return {
        ...state,
        channel: payload.channel,
        channels: payload.channels,
      };
    case CREATE_CHANNEL_FAIL:
      return {
        ...state,
        channel: {},
      };
    case DELETE_CHANNEL_SUCCESS:
      return {
        ...state,
        channels: payload.channels,
        channel: payload.channel,
      };
    case DELETE_CHANNEL_FAIL:
      return {
        ...state,
      };
    case UPDATE_REVIEW_CHANNEL_SUCCESS:
      return {
        ...state,
        channel: payload.channel,
      };
    case UPDATE_REVIEW_CHANNEL_FAIL:
      return {
        ...state,
        channel: {},
      };
    default:
      return state;
  }
}
