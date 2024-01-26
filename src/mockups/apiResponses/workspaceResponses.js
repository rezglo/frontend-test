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
      users: [
        {
          id: 2,
          firstName: 'Pedro',
          lastName: 'Alvarez',
          email: 'palvarez@test.com',
          isOnline: true,
          imagePath: 'userImage.svg'
        },
        {
          id: 3,
          firstName: 'Juan',
          lastName: 'Dealgado',
          email: 'jdelgado2000@test.com',
          isOnline: false,
          imagePath: 'userImage.svg'
        },
        {
          id: 4,
          firstName: 'Miriam Maria',
          lastName: 'Perez',
          email: 'mmPerez1990@test.com',
          isOnline: true,
          imagePath: 'userImage.svg'
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
          public: true,
          name: 'Friday activity'
        },
        {
          id: 4,
          public: false,
          name: '179 - Car list'
        },
        {
          id: 5,
          public: false,
          name: '179 - Car list'
        },
        {
          id: 6,
          public: false,
          name: 'RRHH - Payment'
        }
      ]
    }
  }
}
