import { GET_DIRECT_MESSAGES_FAIL, GET_DIRECT_MESSAGES_SUCCESS } from "./types";

const access = localStorage.getItem("access");
const apiUrl = (randomTime) =>
  `https://ui-avatars.com/api/?name=J+${randomTime}e&background=random`;

export const get_direct_messages = (url, status) => async (dispatch) => {
  if (access) {
    const randomTime = Math.random() * 5000;
    try {
      const res = await fetch(apiUrl(randomTime), {
        method: "GET",
        mode: "cors",
        "Access-Control-Allow-Origin": "*",
      }).then((response) => response);

      if (res.status === 200) {
        const data = { directMessages: [{ url: res.url }] };

        dispatch({
          type: GET_DIRECT_MESSAGES_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_DIRECT_MESSAGES_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_DIRECT_MESSAGES_FAIL,
      });
    }
  }
};
