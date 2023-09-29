import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { type UUID, type Channel, type InputChannel, type inputMessage, type Message } from './types'
import { getAllChannels } from '../utils/functions/getAllCHannels'

interface State {
  channels: Channel[]
  currentChannel?: Channel
  getChannelById: (userEmail: string | undefined) => Promise<void>
  selectChannel: (id: UUID) => void
  addChannel: (input: InputChannel) => void
  removeChannel: (channelId: UUID) => void
  sendMessage: (input: inputMessage) => void
  deleteMessage: (id: UUID) => void
  editMessage: (id: UUID, message: string) => void
}

export const useChannelStore = create<State>()(devtools((set, get) => {
  return {
    channels: [],
    selectChannel: (id: UUID) => {
      const { channels } = get()
      const selectedChannel = channels.find(channel => channel.id === id)
      set({ currentChannel: selectedChannel })
    },
    getChannelById: async (userEmail: string | undefined) => {
      const channelList: Channel[] = await getAllChannels()
      const userChannels = channelList.filter(channel => {
        return channel.owner.email === userEmail || channel.members?.find(member => member.email === userEmail)
      })

      set({ channels: userChannels })
    },
    addChannel: (input: InputChannel) => {
      const { name, owner } = input
      const { channels } = get()
      const newChannel = {
        id: crypto.randomUUID(),
        name,
        owner
      }

      set({
        channels: [...channels, newChannel]
      })
    },
    removeChannel: (channelId: UUID) => {
      const { channels } = get()
      const newChannels = channels.filter(channel => channel.id !== channelId)
      set({ channels: newChannels, currentChannel: undefined })
    },
    sendMessage: (input: inputMessage) => {
      const { author, message } = input
      const { currentChannel, channels } = get()
      const newMessage: Message = {
        id: crypto.randomUUID(),
        author,
        message,
        timestamp: new Date().toJSON()
      }
      if (currentChannel === undefined) return
      const indexChannel = channels.findIndex(channel => channel.id === currentChannel.id)

      if (currentChannel.messages === undefined) {
        const updatedChannel: Channel = {
          ...currentChannel,
          messages: [newMessage]
        }
        const newChannels = [...channels]
        newChannels[indexChannel] = updatedChannel
        set({
          currentChannel: updatedChannel,
          channels: newChannels
        })
      } else {
        const updatedChannel: Channel = {
          ...currentChannel,
          messages: [...currentChannel.messages, newMessage]
        }
        const newChannels = [...channels]
        newChannels[indexChannel] = updatedChannel
        set({
          currentChannel: updatedChannel,
          channels: newChannels
        })
      }
    },
    deleteMessage: (id: UUID) => {
      const { currentChannel, channels } = get()
      if (currentChannel === undefined) return
      if (currentChannel.messages === undefined) return

      const updatedMessages = currentChannel.messages.filter(message => message.id !== id)

      const updatedChannel = {
        ...currentChannel,
        messages: updatedMessages
      }

      const indexChannel = channels.findIndex(channel => channel.id === currentChannel.id)

      const newChannels = [...channels]
      newChannels[indexChannel] = updatedChannel
      set({
        currentChannel: updatedChannel,
        channels: newChannels
      })
    },
    editMessage: (id: UUID, message: string) => {
      const { currentChannel, channels } = get()
      const prevMessages = currentChannel?.messages
      if (currentChannel === undefined) return
      if (prevMessages === undefined) return

      const messageIndex = prevMessages.findIndex(message => message.id === id)
      const newMessages = [...prevMessages]
      newMessages[messageIndex].message = message

      const updatedChannel = {
        ...currentChannel,
        messages: newMessages
      }

      const indexChannel = channels.findIndex(channel => channel.id === currentChannel.id)

      const newChannels = [...channels]
      newChannels[indexChannel] = updatedChannel
      set({
        currentChannel: updatedChannel,
        channels: newChannels
      })
    }
  }
}))
