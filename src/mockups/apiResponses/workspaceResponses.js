import { mockUserListQuery } from "./userResponses"

export const mockWorkspaceListQuery = () => {
  return {
    data: {
      workspaces: [
        {
          id: 1,
          name: 'My workspace',
          url: 'myworkspace.slack.dev',
          logo: 'workspaceImage.svg'
        }
      ]
    }
  }
}

export const mockWorkspaceBasicDataQuery = () => {
  return {
    data: {
      directMessages: [
        {
          id: 2,
          date: '01/25/24',
          text: 'Todo bien gracias. Cómo está usted?',
          to: mockUserListQuery().data.users[1],
          from: mockUserListQuery().data.users[0]
        }
      ],
      channels: [
        {
          id: 1,
          public: true,
          name: 'General'
        },
        {
          id: 2,
          public: true,
          name: 'Kudos'
        },
        {
          id: 3,
          public: false,
          name: '179 - Car list'
        },
        {
          id: 4,
          public: false,
          name: 'RRHH - Payment'
        }
      ]
    }
  }
}
