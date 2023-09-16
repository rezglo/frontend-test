import { fakeFetch } from "@/lib/utils";
import { users, channels, conversations } from "@/utils/data";

export const getUsers = async () => {
  try {
    return await fakeFetch(users);
  } catch (error) {
    console.log("An error occurred while retrieving users data.");
    return [];
  }
};

export const getChannels = async () => {
  try {
    return await fakeFetch(channels);
  } catch (error) {
    console.log("An error occurred while retrieving channels data.");
    return [];
  }
};

export const getConversations = async () => {
  try {
    return await fakeFetch(conversations);
  } catch (error) {
    console.log("An error occurred while retrieving conversations data.");
    return [];
  }
};
