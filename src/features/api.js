import axios from "axios";

export function fetchChannels() {
  return axios.get("http://localhost:3001/channels");
}

export function postChannel(data) {
  return axios.post("http://localhost:3001/channels", data).then(() => {
    return axios.get("http://localhost:3001/channels");
  });
}