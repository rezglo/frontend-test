// import axios from 'axios'
import { envVars } from '@/config/env'

export const baseQuery = ({ baseUrl }) => async ({ url, method, data, params, headers }) => {
  try {
    // - Requesting data
    // const response = await axios({
    //   url: baseUrl.concat(url),
    //   method,
    //   data,
    //   params,
    //   headers
    // })

    // - Mocking response
    const mockedResponse = await mockResponse(url, data)
    return { data: mockedResponse.data }
  } catch (error) {
    console.error(error)
    return {
      error: {
        status: error.response?.status,
        data: error.response?.data || error.message
      }
    }
  }
}

const mockResponse = async (url, data) => {
  // - Simulating a loading delay
  await sleep(3000)

  switch (url) {
  case '/login':
    return mockLogin(data)
  default:
    return { data: {} }
  }
}

const mockLogin = ({ email, password}) => {
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
          imagePath: 'path/to/profile/image.png'
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

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(ms))
  })
}
