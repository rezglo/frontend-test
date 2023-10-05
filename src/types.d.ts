import { z } from 'zod'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

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

export interface DirectMessage {
  id: string
  name: string
  status: Status
  avatar: string
}

export type TIcon = OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
  muiName: string
}

export interface ChannelMessage {
  sender: {
    id: string
    name: string
    avatar: string
  }
  text: string
  sentAt: string
  id: string
}

export interface GroupMessage {
  timestamp: string
  messages: ChannelMessage[]
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 10 characters'),
})

export type LoginSchema = z.infer<typeof loginSchema>
