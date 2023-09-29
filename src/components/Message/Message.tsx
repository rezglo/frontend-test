import { Avatar, Badge, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { Delete } from '@mui/icons-material'
import { type UUID } from '../../store/types'
import { useChannelStore } from '../../store/channels'
import { setDate } from '../../utils/functions/setDate'

interface Props {
  id: UUID
  author: string
  photo: string
  message: string
  timestamp: string
}

function Message ({ id, author, photo, message, timestamp }: Props) {
  const editMessage = useChannelStore(state => state.editMessage)
  const deleteMessage = useChannelStore(state => state.deleteMessage)

  const handleEditClick = () => {
    editMessage(id, '')
  }
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
                  <Badge color='secondary' variant='dot' sx={{ fontSize: '12px', color: '#222' }} >{setDate(timestamp)}</Badge>
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
            <IconButton onClick={handleEditClick} aria-label="edit" size="medium">
              <EditNoteIcon fontSize="inherit" />
            </IconButton>
            <IconButton onClick={handleRemoveClick} aria-label="delete" size="medium">
              <Delete fontSize="inherit" />
            </IconButton>
          </ListItem>
  )
}

export default Message
