import { z } from 'zod'

export const addChannelSchema = z.object({
  name: z.string().min(1, 'You must provide a name'),
  status: z.string(),
})

export type AddChannelSchema = z.infer<typeof addChannelSchema>
