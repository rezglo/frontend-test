import { mockLogin } from './loginResponse'
import { sleep } from '@/utils'

export const mockResponse = async (url, data) => {
  // - Simulating a loading delay
  await sleep(3000)

  switch (url) {
  case '/login':
    return mockLogin(data)
  default:
    return { data: {} }
  }
}
