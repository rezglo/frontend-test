import {
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'

import { Notification } from '../../../../components/notification'
import { useChannelStore } from '../../../../stores'
import { useForm } from '../../../../hooks/useForm'
import { AddChannelSchema, addChannelSchema } from '../../../../types.d'

interface Props {
  open: boolean
  handleClose: () => void
}

export const CreateChannelDialog: React.FC<Props> = ({ open, handleClose }) => {
  const createChannel = useChannelStore((state) => state.createChannel)

  const { register, handleSubmit, reset, isSubmitting } = useForm({ schema: addChannelSchema })

  const onSubmit = async (data: AddChannelSchema) => {
    await createChannel(data)
    reset()
    handleClose()
    Notification.success('Success operation')
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add new channel</DialogTitle>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-start flex-col gap-3 p-[20px]"
      >
        <TextField
          variant="outlined"
          {...register('name')}
          autoFocus
          fullWidth
          placeholder="Channel Name"
        />
        <RadioGroup defaultValue="online" {...register('status')}>
          <FormControlLabel value="online" control={<Radio />} label="Online" />
          <FormControlLabel value="offline" control={<Radio />} label="Offline" />
        </RadioGroup>
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          className="bg-slack text-white rounded-md w-full p-2 disabled:bg-slackLight"
        >
          {isSubmitting ? <CircularProgress size={24} className="text-green-500" /> : 'Add'}
        </Button>
      </form>
    </Dialog>
  )
}
