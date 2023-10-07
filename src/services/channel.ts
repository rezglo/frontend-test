import { mockChannelMessages, mockChannels } from '@/constants'
import { delay } from '@/utils/delay'
import { AuthUser, Channel, SelectedChannel } from '@/types.d'

export const getChannels = async () => {
  await delay()
  return mockChannels as Channel[]
}

export const createChannel = async (data: Partial<Channel>) => {
  await delay()
  return { ...data, id: crypto.randomUUID() }
}

export const removeChannel = async (channels: Channel[], id: string) => {
  await delay()
  return channels.filter((channel) => channel.id !== id)
}

export const getChannelById = async (id: string) => {
  const channels = mockChannelMessages as unknown as SelectedChannel[]
  const selectedChannel = channels.find((channel) => channel.id === id)
  await delay()
  return selectedChannel
}

export const addMessageToChannel = async ({
  message,
  authUser,
  selectedChannel,
}: {
  message: string
  authUser: AuthUser
  selectedChannel: SelectedChannel | null
}) => {
  const newMessage = {
    sender: {
      id: authUser.id,
      name: authUser.name,
      avatar: authUser.avatar,
    },
    text: message,
    sentAt: new Date(),
    id: crypto.randomUUID(),
  }

  const updatedChannel = {
    ...selectedChannel,
    messages: [...(selectedChannel?.messages || []), newMessage],
  }
  await delay()

  return updatedChannel
}
