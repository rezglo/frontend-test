import { z } from 'zod'

export const messageSchema = z.object({
  message: z.string().min(1, 'Empty messages are not allowed'),
})

export type MessageSchema = z.infer<typeof messageSchema>
