import { Message } from "@/types";

export const sendMessage = async (newMessage: Message) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessage),
  });

  if (!res.ok) {
    throw new Error("Error sending message");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = await res.json();

  return true;
};
