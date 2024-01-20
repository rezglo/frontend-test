import { signAccess } from "../../lib/UUID";
import { setAlert } from "./alert";
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
} from "./types";

export const check_authenticated = () => async (dispatch) => {
  try {
    const access = localStorage.getItem("access");

    if (access) {
      dispatch({
        type: AUTHENTICATED_SUCCESS,
      });
    } else {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const signup =
  (first_name, last_name, email, password, re_password) => async (dispatch) => {
    try {
      if (password !== re_password) {
        dispatch({
          type: SIGNUP_FAIL,
        });
        dispatch(
          setAlert("Repeat password does not match the password.", "red")
        );
      }

      const user = {
        id: -1,
        first_name,
        last_name,
        email,
        password,
        channels: [],
      };

      const auths = localStorage.getItem("auths");
      let authsArray = [];

      if (
        auths !== null &&
        auths !== undefined &&
        auths !== "null" &&
        auths !== "undefined"
      )
        authsArray = JSON.parse(auths);

      user.id = authsArray.length;
      authsArray.push(user);

      const res = {
        auths: JSON.stringify(authsArray),
      };

      if (res) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res,
        });
        dispatch(setAlert("Account was successfully registered.", "green"));
      } else {
        dispatch({
          type: SIGNUP_FAIL,
        });
        dispatch(setAlert("Error creating account.", "red"));
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(
        setAlert("Error connecting to the server, try again later.", "red")
      );
    }
  };

export const load_user = () => async (dispatch) => {
  const access = localStorage.getItem("access");
  const auths = localStorage.getItem("auths");

  if (
    access &&
    auths &&
    auths !== null &&
    auths !== undefined &&
    auths !== "null" &&
    auths !== "undefined"
  ) {
    try {
      const authsArray = JSON.parse(auths);
      const userId = access.split("-")[0];
      const user = authsArray.find((object) => `${object.id}` === userId);
      const res = { data: { user, auths } };

      if (res) {
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: USER_LOADED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const auths = localStorage.getItem("auths");

  try {
    let authsArray = [];

    if (
      auths !== null &&
      auths !== undefined &&
      auths !== "null" &&
      auths !== "undefined"
    )
      authsArray = JSON.parse(auths);

    const user = authsArray.find((object) => object.email === email);
    if (user.password !== password) {
      dispatch({
        type: LOGIN_FAIL,
      });
    }

    const access = `${user.id}-${signAccess()}`;

    const res = {
      access,
    };

    if (res) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });
      dispatch(load_user());
      dispatch(setAlert("Successful login.", "green"));
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(setAlert("Failed to login.", "red"));
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert("Failed to login, try again later.", "red"));
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch(setAlert("Succesfully logged out", "green"));
};
