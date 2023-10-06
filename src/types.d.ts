import { z } from 'zod'

export interface AuthUser {
  id: string
  name: string
  avatar: string
}

export enum Type {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

export interface Channel {
  id: string
  name: string
  type: Type
}

export enum Status {
  ONLINE = 'online',
  OFFLINE = 'Offline',
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
  type: Type
  messages: ChannelMessage[]
}

interface DirectMessageSender {
  id: string
}

export interface UsersDirectMessages {
  id: string
  name: string
  avatar: string
  status: Status
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
  status: Status
  messages: DirectMessage[]
}

// Schemas
export interface GroupMessage {
  timestamp: string
  messages: ChannelMessage[]
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 10 characters'),
})

export type LoginSchema = z.infer<typeof loginSchema>

export const messageSchema = z.object({
  message: z.string().min(1, 'Empty messages are not allowed'),
})

export type MessageSchema = z.infer<typeof messageSchema>

export const addChannelSchema = z.object({
  name: z.string().min(1, 'You must provide a name'),
  status: z.string(),
})

export type AddChannelSchema = z.infer<typeof addChannelSchema>
