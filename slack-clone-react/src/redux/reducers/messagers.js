import { LocalStorageManager } from "../../lib/LocalStorageManager";
import {
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAIL,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL,
} from "../actions/types";

const intitialState = {
  messages: LocalStorageManager.getItem("message"),
  message: null,
};

export default function Messager(state = intitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: payload.messages,
      };
    case GET_MESSAGES_FAIL:
      return {
        ...state,
        messages: [],
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: payload.messages,
        message: payload.message,
      };
    case CREATE_MESSAGE_FAIL:
      return {
        ...state,
        messages: {},
      };
    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: {},
        message: payload.message,
      };
    case DELETE_MESSAGE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
