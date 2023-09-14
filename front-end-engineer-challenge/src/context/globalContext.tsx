import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  users as usersData,
  channels as channelsData,
  conversations as conversationsData,
} from "@/utils/data";
import { Channel, Conversation, User } from "@/types";

export const GlobalContext = createContext<{
  users: User[];
  channels: Channel[];
  conversations: Conversation[];
  authenticatedUser: User | object;
  setChannels: Dispatch<SetStateAction<Channel[]>>;
  setConversations: Dispatch<SetStateAction<Conversation[]>>;
  setAuthenticatedUser: Dispatch<SetStateAction<User>>;
}>({
  users: [],
  channels: [],
  conversations: [],
  authenticatedUser: {},
  setChannels: () => {},
  setConversations: () => {},
  setAuthenticatedUser: () => {},
});

const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users] = useState(usersData);
  const [channels, setChannels] = useState(channelsData);
  const [conversations, setConversations] = useState(conversationsData);
  const [authenticatedUser, setAuthenticatedUser] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        users,
        channels,
        conversations,
        authenticatedUser,
        setChannels,
        setConversations,
        setAuthenticatedUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
