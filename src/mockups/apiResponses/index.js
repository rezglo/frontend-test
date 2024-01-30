import { mockChannelMessagesListQuery } from './channelMessagesResponses'
import { mockDirectMessagesListQuery } from './directMessagesResponses'
import { mockLogin } from './loginResponse'
import { mockWorkspaceListQuery, mockWorkspaceBasicDataQuery } from './workspaceResponses'
import { sleep } from '@/utils'

export const mockResponse = async (url, headers, data) => {
  // - Simulating a loading delay
  await sleep(1000)

  // - TODO: Verify if the token in headers is valid

  switch (url) {
  case '/login':
    return mockLogin(data)

  case '/workspaces':
    return mockWorkspaceListQuery()

  case '/workspace-details':
    return mockWorkspaceBasicDataQuery()

  case '/direct-messages':
    return mockDirectMessagesListQuery(data.authUserId, data.userId)

  case '/channel-messages':
    return mockChannelMessagesListQuery(data.channelId)

  default:
    return { data: {} }
  }
}
