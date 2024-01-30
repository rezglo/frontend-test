import { channelMessages } from '../messages/channelMessages'

export const mockChannelMessagesListQuery = (channelId) => {
  const channel = {
    ...channelMessages[channelId],
    id: channelId
  } || null
  return { data: channel }
}
