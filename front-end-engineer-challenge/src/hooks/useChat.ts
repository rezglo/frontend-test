import { useContext } from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from "@/context/globalContext";
import { Message } from "@/types";
import { deleteMessage, setMessage } from "@/lib/utils";

import useUser from "./useUser";

const useChat = () => {
  const user = useUser();
  const params = useParams();
  const { conversations, channels, setChannels, setConversations } =
    useContext(GlobalContext);

  const { roomId } = params;

  const conversation = conversations.filter(
    (conversation) => conversation.id === roomId
  )[0];

  const channel = channels.filter((channel) => channel.id === roomId)[0];

  if (conversation) {
    const name = conversation.participants.filter(
      (participant) => participant.id !== user.id
    )[0].name;

    const messages = conversation.messages;

    const setMessageWrapper = (newMessage: Message) => {
      setMessage({
        list: conversations,
        element: conversation,
        newMessage,
        setFunction: setConversations,
      });
    };

    const deleteMessageWrapper = (messageId: string) => {
      deleteMessage({
        list: conversations,
        element: conversation,
        messageId,
        setFunction: setConversations,
      });
    };

    return {
      name,
      messages,
      setMessage: setMessageWrapper,
      deleteMessage: deleteMessageWrapper,
    };
  }

  if (channel) {
    const name = `#${channel.name}`;
    const messages = channel.messages;

    const setMessageWrapper = (newMessage: Message) => {
      setMessage({
        list: channels,
        element: channel,
        newMessage,
        setFunction: setChannels,
      });
    };

    const deleteMessageWrapper = (messageId: string) => {
      deleteMessage({
        list: channels,
        element: channel,
        messageId,
        setFunction: setChannels,
      });
    };

    return {
      name,
      messages,
      setMessage: setMessageWrapper,
      deleteMessage: deleteMessageWrapper,
    };
  }
};

export default useChat;
