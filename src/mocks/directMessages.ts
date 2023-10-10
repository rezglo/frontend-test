import { mockUsers } from './users'

export const mockDirectMessages = [
  {
    ...mockUsers[1],
    status: 'online',
  },
  {
    ...mockUsers[2],
    status: 'offline',
  },
]

export const mockChatDirectMessages = [
  {
    ...mockDirectMessages[0],
    messages: [
      {
        sender: {
          id: mockUsers[1].id,
        },
        text: 'Hello!!!',
        sentAt: '2023-08-29T05:04:09.396Z',
        id: '5689-5895-5658-5683',
      },
      {
        sender: {
          id: mockUsers[0].id,
        },
        text: 'How are you?',
        sentAt: '2023-08-29T15:04:09.396Z',
        id: '5689-5895-5658-5689',
      },
      {
        sender: {
          id: mockUsers[1].id,
        },
        text: 'I am fine',
        sentAt: '2023-08-29T16:04:09.396Z',
        id: '5689-5895-5658-5628',
      },
      {
        sender: {
          id: mockUsers[1].id,
        },
        text: 'ok',
        sentAt: '2023-08-29T17:04:09.396Z',
        id: '5689-5895-5558-5688',
      },
    ],
  },
  {
    ...mockDirectMessages[1],
    messages: [
      {
        sender: {
          id: mockUsers[1].id,
        },
        text: 'Good morning!!!',
        sentAt: '2023-08-30T22:04:09.396Z',
        id: '5689-5895-8999-4888',
      },
    ],
  },
]
