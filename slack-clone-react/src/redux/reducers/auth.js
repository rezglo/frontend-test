import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  isAuthenticated: null,
  user: null,
  loading: false,
};

export default function Auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "":
      return {
        ...state,
      };

    default:
      return state;
  }
}
