import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
} from "../actions/types";

const initialState = {
  auths: localStorage.getItem("auths"),
  access: localStorage.getItem("access"),
  isAuthenticated: null,
  user: null,
};

export default function Auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTHENTICATED_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        isAuthenticated: false,
        access: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        access: localStorage.getItem("access"),
      };
    case SIGNUP_SUCCESS:
      localStorage.removeItem("access");
      localStorage.setItem("auths", payload.auths);
      return {
        ...state,
        auths: localStorage.getItem("auths"),
        access: null,
        isAuthenticated: false,
        user: null,
      };

    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
