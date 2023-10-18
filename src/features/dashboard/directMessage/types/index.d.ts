export enum StatusDirectMessage {
  ONLINE = 'online',
  OFFLINE = 'Offline',
}

interface DirectMessageSender {
  id: string
}

export interface UsersDirectMessages {
  id: string
  name: string
  avatar: string
  status: StatusDirectMessage
}

interface DirectMessage {
  sender: DirectMessageSender
  text: string
  sentAt: string
  id: string
}

export interface SelectedDirectMessage {
  id: string
  avatar: string
  name: string
  status: StatusDirectMessage
  messages: DirectMessage[]
}
