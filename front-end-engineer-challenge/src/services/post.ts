import { fakeFetch } from "@/lib/utils";
import { Message } from "@/types";

export const sendMessage = async (newMessage: Message) => {
  return await fakeFetch(newMessage);
};
