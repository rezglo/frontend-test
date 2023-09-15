import { users, channels, conversations } from "@/utils/data";

export const getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) return [];

    const data = await res.json();

    return users;
  } catch (error) {
    console.log("An error occurred while retrieving users data.");
    return [];
  }
};

export const getChannels = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) return [];

    const data = await res.json();

    return channels;
  } catch (error) {
    console.log("An error occurred while retrieving channels data.");
    return [];
  }
};

export const getConversations = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) return [];

    const data = await res.json();

    return conversations;
  } catch (error) {
    console.log("An error occurred while retrieving conversations data.");
    return [];
  }
};
