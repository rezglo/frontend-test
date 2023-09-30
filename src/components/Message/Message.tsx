import { Avatar, Chip, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { type UUID } from '../../store/types'
import { useChannelStore } from '../../store/channels'
import { setDate } from '../../utils/functions/setDate'
import ModalMessage from '../ModalMessage/ModalMessage'

interface Props {
  id: UUID
  author: string
  photo: string
  message: string
  timestamp: string
}

function Message ({ id, author, photo, message, timestamp }: Props) {
  const deleteMessage = useChannelStore(state => state.deleteMessage)

  const handleRemoveClick = () => {
    deleteMessage(id)
  }

  return (
    <ListItem disablePadding alignItems="center">
            <ListItemAvatar>
              <Avatar variant='rounded' alt={author} src={photo} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography
                    sx={{ display: 'inline', marginRight: 4 }}
                    component="h6"
                    variant="h6"
                    color="text.primary"
                  >
                    {author}
                  </Typography>
                  <Chip label={setDate(timestamp)} variant="outlined" size="small" />
                </>
              }
              secondary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="p"
                    variant="body2"
                    color="text.primary"
                  >
                    {message}
                  </Typography>
              }
            />
            <ModalMessage id={id} message={message} />
            <IconButton onClick={handleRemoveClick} aria-label="delete" size="medium">
              <Delete fontSize="inherit" />
            </IconButton>
          </ListItem>
  )
}

export default Message
