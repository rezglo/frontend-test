import { Add, EmojiEmotions, MicNone, Send, Textsms } from '@mui/icons-material'
import { Button, CircularProgress, IconButton } from '@mui/material'

import { useForm } from '@/hooks/useForm'
import { messageSchema, MessageSchema } from '@/schemas'

interface Props {
  actionSubmit: (message: string) => Promise<void>
}

export const MessageForm: React.FC<Props> = ({ actionSubmit }) => {
  const { register, handleSubmit, reset, isSubmitting } = useForm({ schema: messageSchema })

  const onSubmit = async ({ message }: MessageSchema) => {
    await actionSubmit(message)
    reset()
  }

  return (
    <form
      className="backdrop-blur-xl bg-white flex w-full justify-center items-center border-solid border-gray-200 border-2 rounded-md px-2 py-1"
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
        placeholder="Type your message"
        autoComplete="do-not-autofill"
      />
      <Button>
        {isSubmitting ? <CircularProgress size={24} className="text-green-500" /> : <Send />}
      </Button>
    </form>
  )
}
