import List from '@mui/material/List'
import './ListofMessages.css'
import { type Message as MessageType } from '../../store/types'
import Message from '../Message/Message'
import { Divider } from '@mui/material'
import { Fragment } from 'react'

interface Props {
  messages: MessageType[] | undefined
}

function ListOfMessages ({ messages }: Props) {
  const anyMessage = messages === undefined || messages.length === 0
  return (
      <div id='list-container'>
        <List disablePadding sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
          {
            anyMessage
              ? <p className='alternative-info'>No hay mensajes en el Canal</p>
              : messages.map(message => (
                <Fragment key={message.id}>
                  <Message
                    id={message.id}
                    author={message.author.username}
                    message={message.message}
                    photo={message.author.photo}
                    timestamp={message.timestamp}
                  />
                  <Divider variant="inset" component="li" />
                </Fragment>
              ))
          }
        </List>
      </div>
  )
}

export default ListOfMessages
