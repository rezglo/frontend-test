import {
  GET_DIRECT_MESSAGES_FAIL,
  GET_DIRECT_MESSAGES_SUCCESS,
} from "../actions/types";

const intitialState = {
  directMessages: [],
};

export default function DirectMessager(state = intitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DIRECT_MESSAGES_SUCCESS:
      return {
        ...state,
        directMessages: payload.directMessages,
      };
    case GET_DIRECT_MESSAGES_FAIL:
      return {
        ...state,
        directMessages: [],
      };
    default:
      return state;
  }
}
