import { envVars } from '@/config/env'

// - Improve this function
export const mockLogin = ({ email, password }) => {
  if (email === envVars.TEST_AUTH_USER_EMAIL && password === envVars.TEST_AUTH_USER_PASSWORD) {
    return {
      data: {
        token: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        user: {
          id: 1,
          firstName: 'Alvaro',
          lastName: 'Alonso',
          username: 'aalonso2024',
          email: 'alvaro.alonso@test.com',
          isOnline: true,
          imagePath: 'userImage.svg'
        }
      }
    }
  } else {
    const error = new Error()
    error.response = {
      status: 401,
      data: 'Invalid credentials'
    }

    throw error
  }
}
