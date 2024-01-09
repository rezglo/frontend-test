import { types } from "../types/types";
import data from "../data/messages";

const initialState = {
  activeUserChat: null,
  activeChannel: null,
  users: [],
  listMassages: data,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.setActiveUser:
      return {
         ...state, 
         activeUserChat: payload 
        };
    case types.chatListUser:
      return { ...state, users: payload };

    case types.activeUserChat:
      return { ...state, activeUserChat: payload };

    case types.clearActiveUserChat:
      return {
        ...state,
        activeUserChat: null,
      };
    case types.activeChannel:
      return { ...state, activeChannel: payload };

    case types.clearActiveChanel:
      return {
        ...state,
        activeChannel: null,
      };
    case types.messageAddNew:
      return {
        ...state,
        listMassages: [payload, ...state.listMassages],
      };
    case types.massageUpdate:
      return {
        ...state,
        listMassages: state.listMassages.map((e) =>
          e.id === payload.id ? payload : e
        ),
      };
    case types.massageDelete:
      return {
        ...state,
        listMassages: state.listMassages.filter((e) => e.id !== payload),
        activeEvent: null,
      };

    default:
      return state;
  }
};
