import { mockAuthUser, mockToken } from '../constants'
import { delay } from '../lib/delay'
import { LoginSchema } from '../types.d'

export const getAuthUser = async () => {
  await delay()
  return mockAuthUser
}

export const login = async (data: LoginSchema) => {
  console.log(data)
  await delay()
  return { token: mockToken }
}
