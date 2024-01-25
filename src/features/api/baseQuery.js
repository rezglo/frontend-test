// import axios from 'axios'
import { mockResponse } from '@/mockups/apiResponses'

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


