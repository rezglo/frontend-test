import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Add, EmojiEmotions, MicNone, Send, Textsms } from '@mui/icons-material'
import { Button, CircularProgress, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Notification } from '../../../components/Notification'

const messageSchema = z.object({
  message: z.string(),
})

type MessageSchema = z.infer<typeof messageSchema>

interface Props {
  actionSubmit: (message: string) => Promise<void>
}

export const MessageForm: React.FC<Props> = ({ actionSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema),
  })

  const onSubmit = async ({ message }: MessageSchema) => {
    await actionSubmit(message)
    reset()
  }

  useEffect(() => {
    if (errors == null) return

    const objectMesagges = Object.entries(errors)

    objectMesagges.forEach(([, value]) => {
      Notification.error(value.message as string)
    })
  }, [errors])

  return (
    <form
      className="bg-white flex w-[95%] justify-center items-center border-solid border-gray-200 border-2 rounded-md m-5 absolute bottom-0"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <IconButton>
        <Add />
      </IconButton>
      <IconButton>
        <EmojiEmotions />
      </IconButton>
      <IconButton>
        <Textsms />
      </IconButton>
      <IconButton>
        <MicNone />
      </IconButton>

      <input
        className="outline-none border-none h-full m-0 w-full bg-transparent text-gray-800 ml-5"
        autoFocus
        {...register('message')}
      />
      <Button>
        {isSubmitting ? <CircularProgress size={24} className="text-green-500" /> : <Send />}
      </Button>
    </form>
  )
}
