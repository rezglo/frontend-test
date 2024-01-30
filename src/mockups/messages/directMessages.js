import { mockUserListQuery } from '../apiResponses/userResponses'

export const directMessages = {
  '1-2': [
    {
      id: 1,
      date: '11/10/23',
      text: 'Hola, Buen día',
      from: mockUserListQuery().data.users[0],
      to: mockUserListQuery().data.users[1]
    },
    {
      id: 2,
      date: '11/10/23',
      text: 'Buenos días',
      from: mockUserListQuery().data.users[1],
      to: mockUserListQuery().data.users[0]
    },
    {
      id: 3,
      date: '11/10/23',
      text: 'Cómo está? por acá todo bien',
      from: mockUserListQuery().data.users[1],
      to: mockUserListQuery().data.users[0]
    },
    {
      id: 4,
      date: '11/10/23',
      text: 'Todo bien gracias. Cómo está usted?',
      from: mockUserListQuery().data.users[0],
      to: mockUserListQuery().data.users[1]
    }
  ],
  '1-3': [],
  '1-4': []
}