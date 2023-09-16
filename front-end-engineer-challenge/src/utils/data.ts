import { Channel, Conversation, User } from "@/types";

export const users: User[] = [
  {
    id: "user1",
    name: "John Doe",
    email: "user1@mail.com",
    conversations: ["conversation1", "conversation3"],
  },
  {
    id: "user2",
    name: "Jane Doe",
    email: "user2@mail.com",
    conversations: ["conversation1", "conversation2"],
  },
  {
    id: "user3",
    name: "Bob Smith",
    email: "user3@mail.com",
    conversations: ["conversation2", "conversation3"],
  },
];

export const channels: Channel[] = [
  {
    id: "channel1",
    name: "general",
    messages: [
      {
        id: "message1",
        body: "Hello!",
        sender: users[0],
        createdAt: new Date(),
      },
      { id: "message2", body: "Hi!", sender: users[1], createdAt: new Date() },
      {
        id: "message3",
        body: "How are you?",
        sender: users[2],
        createdAt: new Date(),
      },
    ],
  },
  {
    id: "channel2",
    name: "projects",
    messages: [
      {
        id: "message4",
        body: "Good morning!",
        sender: users[0],
        createdAt: new Date(),
      },
      {
        id: "message5",
        body: "Good afternoon!",
        sender: users[1],
        createdAt: new Date(),
      },
      {
        id: "message6",
        body: "Good evening!",
        sender: users[2],
        createdAt: new Date(),
      },
    ],
  },
  {
    id: "channel3",
    name: "work",
    messages: [
      {
        id: "message7",
        body: "Happy Monday!",
        sender: users[0],
        createdAt: new Date(),
      },
      {
        id: "message8",
        body: "Happy Tuesday!",
        sender: users[1],
        createdAt: new Date(),
      },
      {
        id: "message9",
        body: "Happy Wednesday!",
        sender: users[2],
        createdAt: new Date(),
      },
    ],
  },
];

export const conversations: Conversation[] = [
  {
    id: "conversation1",
    participants: [users[0], users[1]], // John Doe and Jane Doe
    messages: [
      {
        id: "message10",
        body: "Hello Jane!",
        sender: users[0],
        createdAt: new Date(),
      },
      {
        id: "message11",
        body: "Hi John!",
        sender: users[1],
        createdAt: new Date(),
      },
    ],
  },
  {
    id: "conversation2",
    participants: [users[1], users[2]], // Jane Doe and Bob Smith
    messages: [
      {
        id: "message12",
        body: "Hello Bob!",
        sender: users[1],
        createdAt: new Date(),
      },
      {
        id: "message13",
        body: "Hi Jane!",
        sender: users[2],
        createdAt: new Date(),
      },
    ],
  },
  {
    id: "conversation3",
    participants: [users[0], users[2]], // Jane Doe and Bob Smith
    messages: [
      {
        id: "message12",
        body: "Hello Bob!",
        sender: users[0],
        createdAt: new Date(),
      },
      {
        id: "message13",
        body: "Hi Jhon!",
        sender: users[2],
        createdAt: new Date(),
      },
    ],
  },
];
