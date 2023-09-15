import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import {
  users as usersData,
  channels as channelsData,
  conversations as conversationsData,
} from "@/utils/data";
import { Channel, Conversation, User } from "@/types";
import { getChannels, getConversations, getUsers } from "@/lib/api";

export const GlobalContext = createContext<{
  users: User[];
  channels: Channel[];
  conversations: Conversation[];
  setChannels: Dispatch<SetStateAction<Channel[]>>;
  setConversations: Dispatch<SetStateAction<Conversation[]>>;
}>({
  users: [],
  channels: [],
  conversations: [],
  setChannels: () => {},
  setConversations: () => {},
});

const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState(usersData);
  const [channels, setChannels] = useState(channelsData);
  const [conversations, setConversations] = useState(conversationsData);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchChannels = async () => {
      try {
        const data = await getChannels();
        setChannels(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchConversations = async () => {
      try {
        const data = await getConversations();
        setConversations(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    fetchChannels();
    fetchConversations();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        users,
        channels,
        conversations,
        setChannels,
        setConversations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
