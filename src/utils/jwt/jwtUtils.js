// - TODO: Implement a a function that decode JWT
export const decodeToken = (token) => {
  return token
    ? {
      id: 1,
      firstName: 'Alvaro',
      lastName: 'Alonso',
      username: 'aalonso2024',
      email: 'alvaro.alonso@test.com',
      isOnline: true,
      imagePath: 'path/to/profile/image.png'
    }
    : null
}
