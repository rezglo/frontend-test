export interface User {
  id: string;
  name: string;
  email: string;
  conversations: string[];
}

export interface Message {
  id: string;
  body: string;
  sender: User;
  createdAt: Date;
}

export interface Channel {
  id: string;
  name: string;
  messages: Message[];
}

export interface Conversation {
  id: string;
  participants: User[];
  messages: Message[];
}
