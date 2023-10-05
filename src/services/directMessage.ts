import { mockChatDirectMessages, mockDirectMessages } from '../constants'
import { delay } from '../lib/delay'
import { SelectedDirectMessage } from '../store'
import { AuthUser, DirectMessage } from '../types'

export const getDirectMessages = async () => {
  await delay()
  return mockDirectMessages as DirectMessage[]
}

export const getDirectMessagesById = async (id: string) => {
  const directMessages = mockChatDirectMessages as unknown as SelectedDirectMessage[]
  const selectedDirectMessages = directMessages.find((directMessage) => directMessage.id === id)
  await delay()
  return selectedDirectMessages
}

export const addMessageToDirectMessage = async ({
  message,
  authUser,
  selectedDirectMessage,
}: {
  message: string
  authUser: AuthUser
  selectedDirectMessage: SelectedDirectMessage | null
}) => {
  const newMessage = {
    sender: {
      id: authUser.id,
    },
    text: message,
    sentAt: new Date(),
    id: crypto.randomUUID(),
  }

  const updatedChannel = {
    ...selectedDirectMessage,
    messages: [...(selectedDirectMessage?.messages || []), newMessage],
  }
  await delay()

  return updatedChannel
}
