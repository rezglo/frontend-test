export const mockUserListQuery = () => {
  return {
    data: {
      users: [
        {
          id: 1,
          firstName: 'Alvaro',
          lastName: 'Alonso',
          email: 'alvaro.alonso@test.com',
          isOnline: true,
          imagePath: 'userImage.svg'
        },
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
      ]
    }
  }
}