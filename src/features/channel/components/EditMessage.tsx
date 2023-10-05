import { useEffect } from 'react'
import { CircularProgress, IconButton } from '@mui/material'
import { Close, Send } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Notification } from '../../../components/Notification'

interface Props {
  messageToEdit: string
  onEditMessage: (message: string) => void
  onDisableEditMode: () => void
}

const messageSchema = z.object({
  message: z.string(),
})

type MessageSchema = z.infer<typeof messageSchema>

export const EditMessage: React.FC<Props> = ({
  messageToEdit,
  onEditMessage,
  onDisableEditMode,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema),
  })

  const onSubmit = async ({ message }: MessageSchema) => {
    onEditMessage(message)
    onDisableEditMode()
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
      className="bg-white w-full flex justify-center items-center border-solid border-gray-200 border-2 rounded-md"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="outline-none border-none h-full m-0 w-full bg-transparent text-gray-800 ml-5"
        defaultValue={messageToEdit}
        autoFocus
        {...register('message')}
      />
      <IconButton type="submit">
        {isSubmitting ? <CircularProgress size={24} className="text-green-500" /> : <Send />}
      </IconButton>
      <IconButton onClick={onDisableEditMode}>
        <Close />
      </IconButton>
    </form>
  )
}
