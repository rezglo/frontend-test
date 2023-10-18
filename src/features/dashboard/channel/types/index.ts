export enum ChannelType {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

export interface Channel {
  id: string
  name: string
  type: ChannelType
}

export interface ChannelSender {
  id: string
  name: string
  avatar: string
}

export interface ChannelMessage {
  sender: ChannelSender
  text: string
  sentAt: string
  id: string
}

export interface SelectedChannel {
  id: string
  name: string
  type: ChannelType
  messages: ChannelMessage[]
}
