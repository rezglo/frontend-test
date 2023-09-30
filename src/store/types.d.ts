export type UUID = `${string}-${string}-${string}-${string}-${string}`

export interface User {
  id: UUID
  username: string
  email: string
  password: string
  photo: string
}

export interface InputUser {
  email: string
  password: string
}

export interface Channel {
  id: UUID
  owner: User
  members?: User[]
  name: string
  messages?: Message[]
}

export interface InputChannel {
  owner: User
  name: string
}

export interface Message {
  id: UUID
  author: User
  timestamp: string
  message: string
}

export interface inputMessage {
  author: User
  message: string
}
