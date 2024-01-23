import { types } from "../types/types";

const initialState = {
  activeAlert: false,
  activeModalTags: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.uiOpenAlert: {
      return {
        ...state,
        activeAlert: payload,
      };
    }
    case types.uiCloseAlert: {
      return {
        ...state,
        activeAlert: false,
      };
    }
    default:
      return state;
  }
};
