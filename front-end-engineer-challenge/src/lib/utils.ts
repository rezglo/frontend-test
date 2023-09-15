import React from "react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { Channel, Conversation, Message } from "@/types";

interface setMessageProps {
  list: (Channel | Conversation)[];
  element: Channel | Conversation;
  newMessage: Message;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFunction: React.Dispatch<React.SetStateAction<any>>;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setMessage = ({
  list,
  element,
  newMessage,
  setFunction,
}: setMessageProps) => {
  const newElement = { ...element };
  newElement.messages.push(newMessage);

  const index = list.indexOf(element);

  setFunction([...list.slice(0, index), newElement, ...list.slice(index + 1)]);
};
