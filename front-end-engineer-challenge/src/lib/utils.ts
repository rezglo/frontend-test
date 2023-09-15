import React from "react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { Channel, Conversation, Message } from "@/types";

interface MessageFunctionsProps {
  list: (Channel | Conversation)[];
  element: Channel | Conversation;
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
}: MessageFunctionsProps & { newMessage: Message }) => {
  const newElement = { ...element };
  newElement.messages.push(newMessage);

  const index = list.indexOf(element);

  setFunction([...list.slice(0, index), newElement, ...list.slice(index + 1)]);
};

export const deleteMessage = ({
  list,
  element,
  messageId,
  setFunction,
}: MessageFunctionsProps & { messageId: string }) => {
  const newElement = { ...element };
  const newMessages = newElement.messages.filter(
    (message) => message.id !== messageId
  );
  newElement.messages = newMessages;

  const index = list.indexOf(element);
  setFunction([...list.slice(0, index), newElement, ...list.slice(index + 1)]);
};
