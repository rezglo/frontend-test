import { create } from 'zustand'
import {
  addMessageToDirectMessage,
  getDirectMessages,
  getDirectMessagesById,
} from '@/features/dashboard/directMessage/services/directMessage'
import { AuthUser } from '@/features/auth/login/types'
import {
  DirectMessage,
  SelectedDirectMessage,
  UsersDirectMessages,
} from '@/features/dashboard/directMessage/types'

interface State {
  directMessages: UsersDirectMessages[]
  selectedDirectMessage: SelectedDirectMessage | null
  getDirectMessages: () => void
  getDirectMessagesById: (id: string) => void
  addMessageToDirectMessage: ({
    message,
    authUser,
  }: {
    message: string
    authUser: AuthUser
  }) => void
  editMessageFromDirectMessage: ({
    idMessage,
    editedMessage,
  }: {
    idMessage: string
    editedMessage: string
  }) => void
  removeMessageFromDirectMessage: (id: string) => void
}

export const useDirectMessageStore = create<State>((set, get) => ({
  directMessages: [],
  selectedDirectMessage: null,

  getDirectMessages: async () => {
    const directMessages = await getDirectMessages()
    set({ directMessages })
  },

  getDirectMessagesById: async (id) => {
    const selectedDirectMessage = await getDirectMessagesById(id)
    set({ selectedDirectMessage })
  },

  addMessageToDirectMessage: async ({ message, authUser }) => {
    const selectedDirectMessage = get().selectedDirectMessage

    const updatedDirectMessage = (await addMessageToDirectMessage({
      message,
      authUser,
      selectedDirectMessage,
    })) as SelectedDirectMessage

    set({ selectedDirectMessage: updatedDirectMessage })
  },

  editMessageFromDirectMessage: async ({ idMessage, editedMessage }) => {
    const selectedDirectMessage = structuredClone(get().selectedDirectMessage)

    const messageToEdit = selectedDirectMessage?.messages?.find(
      (message: DirectMessage) => message.id === idMessage,
    )

    if (!messageToEdit) return

    messageToEdit.text = editedMessage

    set({ selectedDirectMessage })
  },

  removeMessageFromDirectMessage: async (idMessage) => {
    const selectedDirectMessage = get().selectedDirectMessage

    const updatedMessages = selectedDirectMessage?.messages?.filter(
      (message) => message.id !== idMessage,
    )

    const updatedDirectMessage = {
      ...selectedDirectMessage,
      messages: updatedMessages,
    } as SelectedDirectMessage

    set({ selectedDirectMessage: updatedDirectMessage })
  },
}))
