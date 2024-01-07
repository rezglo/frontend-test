import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

export const check_authenticated = () => async (dispatch) => {};

export const signup =
  (first_name, last_name, email, password, re_password) =>
  async (dispatch) => {};

export const login = (email, password) => async (dispatch) => {};

export const logout = () => (dispatch) => {};
