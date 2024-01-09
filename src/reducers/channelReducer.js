
import { types } from "../types/types"
import data from "../data/channels"
const initialState = {
    channels: data,
  };
  
   export default (state = initialState,{ type, payload }) => {
    switch (type) {
      case types.addChannel:
        return {
          ...state,
          channels: [...state.channels, payload],
        };
      case types.removeChannel:
        return {
          ...state,
          channels: state.channels.filter(channel => channel.id !== payload),
        };
      default:
        return state;
    }
  };
  