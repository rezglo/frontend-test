import { mockUsers } from './users'

export const mockChannels = [
  {
    id: '2432-2356-5656-5656',
    name: 'work',
    type: 'private',
  },
  {
    id: '2432-2356-5656-5658',
    name: 'tony-party',
    type: 'public',
  },
]

export const mockChannelMessages = [
  {
    ...mockChannels[0],
    messages: [
      {
        sender: mockUsers[1],
        text: 'Good morning',
        sentAt: '2023-08-24T22:04:09.396Z',
        id: '5689-5896-4548-8953',
      },
      {
        sender: mockUsers[0],
        text: 'Hello',
        sentAt: '2023-08-29T22:04:09.396Z',
        id: '5689-5895-3444-8883',
      },
      {
        sender: mockUsers[3],
        text: 'My name is Tony',
        sentAt: '2023-08-24T22:04:09.396Z',
        id: '5689-5896-3430-4229',
      },
    ],
  },
  {
    ...mockChannels[1],
    messages: [
      {
        sender: mockUsers[0],
        text: 'Hello!!!',
        sentAt: '2023-08-24T22:04:09.396Z',
        id: '5689-5896-1234-9053',
      },
      {
        sender: mockUsers[1],
        text: 'Good morning!!!',
        sentAt: '2023-08-29T22:04:09.396Z',
        id: '5689-5895-2453-4563',
      },
      {
        sender: mockUsers[2],
        text: 'How was your day?',
        sentAt: '2023-08-24T22:04:09.396Z',
        id: '5689-5896-2345-5678',
      },
    ],
  },
  {
    id: '7895-2356',
    name: 'family',
    type: 'private',
    messages: [
      {
        sender: mockUsers[2],
        text: 'Hello!!!',
        sentAt: '2023-08-24T22:04:09.396Z',
        id: '5689-5896-3465-1234',
      },
      {
        sender: mockUsers[0],
        text: 'Good morning',
        sentAt: '2023-08-29T22:04:09.396Z',
        id: '5689-5895-2356-4567',
      },
      {
        sender: mockUsers[1],
        text: 'How are you?',
        sentAt: '2023-08-24T22:04:09.396Z',
        id: '5689-5896-2345-7856',
      },
    ],
  },
]
