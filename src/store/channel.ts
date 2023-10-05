import { create } from 'zustand'

import { createChannel, getChannels, removeChannel } from '../services'
import { addMessageToChannel, getChannelById } from '../services/channel'
import { AuthUser, Channel, Type } from '../types.d'

export interface Sender {
  id: string
  name: string
  avatar: string
}

export interface Message {
  sender: Sender
  text: string
  sentAt: string
  id: string
}

export interface SelectedChannel {
  id: string
  name: string
  type: Type
  messages: Message[]
}

interface State {
  channels: Channel[]
  selectedChannel: SelectedChannel | null
  getChannels: () => void
  createChannel: (newChannel: Partial<Channel>) => void
  removeChannel: (id: string) => void
  getChannelById: (id: string) => void
  addMessageToChannel: ({ message, authUser }: { message: string; authUser: AuthUser }) => void
  editMessageFromChannel: ({
    idMessage,
    editedMessage,
  }: {
    idMessage: string
    editedMessage: string
  }) => void
  removeMessageFromChannel: (idMessage: string) => void
}

export const useChannelStore = create<State>((set, get) => ({
  channels: [],
  selectedChannel: null,

  getChannels: async () => {
    const channels = await getChannels()
    set({ channels })
  },

  getChannelById: async (id) => {
    const selectedChannel = await getChannelById(id)
    set({ selectedChannel })
  },

  createChannel: async (data) => {
    const channels = get().channels
    const newChannel = await createChannel(data)
    const updatedChannels = [...channels, newChannel] as Channel[]
    set({ channels: updatedChannels })
  },

  removeChannel: async (id) => {
    const channels = get().channels
    const updateChannels = await removeChannel(channels, id)
    set({ channels: updateChannels })
  },

  addMessageToChannel: async ({ message, authUser }) => {
    const selectedChannel = get().selectedChannel
    const updatedChannel = (await addMessageToChannel({
      message,
      authUser,
      selectedChannel,
    })) as SelectedChannel
    set({ selectedChannel: updatedChannel })
  },

  editMessageFromChannel: async ({ idMessage, editedMessage }) => {
    const selectedChannel = structuredClone(get().selectedChannel)

    const messageToEdit = selectedChannel?.messages?.find((message) => message.id === idMessage)

    if (!messageToEdit) return

    messageToEdit.text = editedMessage

    set({ selectedChannel })
  },

  removeMessageFromChannel: async (idMessage) => {
    const selectedChannel = get().selectedChannel
    const updatedMessages = selectedChannel?.messages?.filter(
      (message) => message.id !== idMessage,
    ) as Message[]

    const updatedChannel = { ...selectedChannel, messages: updatedMessages } as SelectedChannel

    set({ selectedChannel: updatedChannel })
  },
}))
