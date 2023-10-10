import { mockAuthUser, mockToken } from '@/mocks'
import { LoginSchema } from '@/schemas'
import { delay } from '@/utils/delay'

export const getAuthUser = async () => {
  await delay()
  // if the token is not valid the fetch reques has an 401 error and the response is null
  return mockAuthUser
}

export const login = async (data: LoginSchema) => {
  console.log(data)
  await delay()
  return { token: mockToken }
}
