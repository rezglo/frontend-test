import { types } from "../types/types";

export const addChannel = channel => ({
    type: types.addChannel,
    payload: channel,
  });
  
  export const removeChannel = channelId => ({
    type: types.removeChannel,
    payload: channelId,
  });