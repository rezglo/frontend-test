import React from 'react'
import Box from '@mui/material/Box'
import { Message } from 'types/Message'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import moment from 'moment'

interface Props {
  item: Message
  onAction: (action: 'remove' | 'edit', elem: Message) => void
}

const ChatElement: React.FC<Props> = ({ item, onAction }) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'grey.400',
        borderRadius: 3,
        p: 1,
        px: 2,
        mb: 1
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: 70, pt: 1 }}
        >
          <AccountCircleIcon sx={{ color: 'grey.400', fontSize: '50px' }} />
        </Box>
        <Box flex={1}>
          <Box
            sx={{
              py: 1
            }}
          >
            <Typography variant="h6">{item.user}</Typography>
            <Typography variant="body2" display="block">
              {moment(new Date(item.unixTime * 1000)).format(
                'YYYY-MM-DD HH:mm'
              )}
            </Typography>
          </Box>
          <Typography variant="body1" display="block">
            {item.text}
          </Typography>
          <Box sx={{ pt: 1 }}>
            <Link
              underline="hover"
              variant="body1"
              onClick={() => {
                onAction('edit', item)
              }}
              sx={{ cursor: 'pointer', mr: 2 }}
            >
              Edit
            </Link>
            <Link
              underline="hover"
              variant="body1"
              onClick={() => {
                onAction('remove', item)
              }}
              sx={{ cursor: 'pointer' }}
            >
              Delete
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatElement
