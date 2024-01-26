import { mockLogin } from './loginResponse'
import { mockWorkspaceListQuery, mockWorkspaceBasicDataQuery } from './workspaceResponses'
import { sleep } from '@/utils'

export const mockResponse = async (url, headers, data) => {
  // - Simulating a loading delay
  await sleep(3000)

  // - TODO: Verify if the token in headers is valid

  switch (url) {
  case '/login':
    return mockLogin(data)

  case '/workspaces':
    return mockWorkspaceListQuery()

  case '/workspace-details':
    return mockWorkspaceBasicDataQuery()

  default:
    return { data: {} }
  }
}
