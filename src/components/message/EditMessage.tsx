import { CircularProgress, IconButton } from '@mui/material'
import { Close, Send } from '@mui/icons-material'

import { useForm } from '@/hooks/useForm'
import { MessageSchema, messageSchema } from '@/schemas'

interface Props {
  messageToEdit: string
  onEditMessage: (message: string) => void
  onDisableEditMode: () => void
}

export const EditMessage: React.FC<Props> = ({
  messageToEdit,
  onEditMessage,
  onDisableEditMode,
}) => {
  const { register, handleSubmit, reset, isSubmitting } = useForm({ schema: messageSchema })

  const onSubmit = async ({ message }: MessageSchema) => {
    onEditMessage(message)
    onDisableEditMode()
    reset()
  }

  return (
    <form
      className="bg-white w-full flex justify-center items-center border-solid border-gray-200 border-2 rounded-md"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        autoFocus
        className="outline-none border-none h-full m-0 w-full bg-transparent text-gray-800 ml-5"
        {...register('message')}
        defaultValue={messageToEdit}
        autoComplete="do-not-autofill"
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
