import { directMessages } from '../messages/directMessages'

export const mockDirectMessagesListQuery = (authUserId, userId) => {
  return {
    data: {
      messages: directMessages[`${authUserId}-${userId}`] || []
    }
  }
}
