import axios from "axios";

export function fetchChannels() {
  return axios.get("http://localhost:3001/channels");
}

export function fetchChannelById(id){
  return axios.get(`http://localhost:3001/channels/${id}`)
}

export function postChannel(data) {
  return axios.post("http://localhost:3001/channels", data).then(() => {
    return axios.get("http://localhost:3001/channels");
  });
}

export function updateChannel(id, data){
  return axios.put(`http://localhost:3001/channels/${id}`,  data).then(() => {
    return axios.get("http://localhost:3001/channels");
  });
}

export function fetchUsers(){
  return axios.get("http://localhost:3001/users");
}

export function deleteChannel(id){
  return axios.delete(`http://localhost:3001/channels/${id}`).then(() => {
    return axios.get("http://localhost:3001/channels");
  });
}