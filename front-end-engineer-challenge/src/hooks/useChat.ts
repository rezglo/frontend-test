import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import useUser from "./useUser";

const useChat = () => {
  const user = useUser();
  const params = useParams();
  const { conversations, channels } = useContext(GlobalContext);

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

    return { name, messages };
  }
  if (channel) {
    const name = `#${channel.name}`;
    const messages = channel.messages;

    return { name, messages };
  }
};

export default useChat;
