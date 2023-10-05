export const mockToken = 'sasfd565fdfdfddwewe24454'

export const mockUsers = [
  {
    id: '2598-6568-6656-5656',
    name: 'Jhon Doe',
    avatar: '/avatars/1.jpg',
  },
  {
    id: '2356-5618-5656-1212',
    name: 'Tony Santana',
    avatar: '/avatars/2.jpg',
  },
  {
    id: '2356-5623-565-4566',
    name: 'Laura Lopez',
    avatar: '/avatars/3.jpg',
  },
  {
    id: '8788-2345-2356-562',
    name: 'Alice Morales',
    avatar: '/avatars/4.jpg',
  },
]

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

export const mockAuthUser = mockUsers[0]

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
