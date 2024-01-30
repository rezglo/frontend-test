import { mockUserListQuery } from '../apiResponses/userResponses'

export const channelMessages = {
  1: {
    name: 'General',
    public: false,
    users: [
      mockUserListQuery().data.users[0],
      mockUserListQuery().data.users[1],
      mockUserListQuery().data.users[2]
    ],
    messages: [
      {
        id: 100,
        date: '11/10/23',
        text: 'Hola, Buen día',
        from: mockUserListQuery().data.users[0]
      },
      {
        id: 101,
        date: '11/10/23',
        text: 'Buenos días',
        from: mockUserListQuery().data.users[1]
      },
      {
        id: 102,
        date: '11/10/23',
        text: 'Buenos días, cómo están todos?',
        from: mockUserListQuery().data.users[2]
      },
      {
        id: 103,
        date: '11/10/23',
        text: 'Todo bien gracias',
        from: mockUserListQuery().data.users[1]
      },
      {
        id: 104,
        date: '11/10/23',
        text: 'Todo bien por acá',
        from: mockUserListQuery().data.users[2]
      }
    ]
  },
  2: {
    name: 'Kudos',
    public: true,
    users: [
      mockUserListQuery().data.users[0],
      mockUserListQuery().data.users[1],
      mockUserListQuery().data.users[2]
    ],
    messages: [
      {
        id: 100,
        date: '11/10/23',
        text: 'Hola a todos, cómo están?',
        from: mockUserListQuery().data.users[2]
      },
    ]
  },
  3: {
    name: '179 - Car list',
    public: false,
    users: [
      mockUserListQuery().data.users[0],
      mockUserListQuery().data.users[1]
    ],
    messages: []
  },
  4: {
    name: 'RRHH - Payment',
    public: false,
    users: [
      mockUserListQuery().data.users[2],
      mockUserListQuery().data.users[3]
    ],
    messages: []
  }
}