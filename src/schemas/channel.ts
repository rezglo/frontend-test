import { ChannelType } from '@/features/dashboard/channel/types'
import { z } from 'zod'

export const addChannelSchema = z.object({
  name: z.string().min(1, 'You must provide a name'),
  type: z.nativeEnum(ChannelType),
})

export type AddChannelSchema = z.infer<typeof addChannelSchema>
