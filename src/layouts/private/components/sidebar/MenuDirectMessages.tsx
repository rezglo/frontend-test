import { useState } from 'react'
import { ArrowDropDown, ArrowRight, FiberManualRecord } from '@mui/icons-material'
import {
  Avatar,
  CircularProgress,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { TYPE_DIRECT_MESSAGE_ACTION, useDirectMessage } from '../../../../hooks'
import { Status } from '../../../../types.d'
import { Link, useParams } from 'react-router-dom'

export const MenuDirectMessages = () => {
  const [directMessagesExpanded, setDirectMessagesExpanded] = useState(true)
  const { directMessages, isLoading } = useDirectMessage({
    type: TYPE_DIRECT_MESSAGE_ACTION.GET_ALL,
  })
  const params = useParams()

  return (
    <>
      <ListItemButton
        onClick={() => {
          setDirectMessagesExpanded((current) => !current)
        }}
        className="text-white opacity-60"
      >
        <ListItemIcon className="min-w-[24px] mr-1">
          {directMessagesExpanded ? (
            <ArrowDropDown className="text-white" />
          ) : (
            <ArrowRight className="text-white" />
          )}
        </ListItemIcon>
        <ListItemText primary="Direct Messages" />
      </ListItemButton>
      {!isLoading && (
        <Collapse in={directMessagesExpanded} timeout="auto" unmountOnExit className="opacity-60">
          <List className="flex flex-col gap-4" disablePadding>
            {directMessages.map(({ id, name, avatar, status }) => (
              <Link key={id} to={`/direct-message/${id}`} className="w-full">
                <ListItem className="group" disablePadding>
                  <ListItemButton
                    selected={params.directMessageId === id}
                    className="h-[36px] pl-10 py-6 "
                  >
                    <ListItemIcon className="text-xl justify-center mr-2 min-w-[24px] text-white relative">
                      <FiberManualRecord
                        className={`absolute bottom-[-8px] right-[-8px] z-50 ${
                          status === Status.ONLINE ? 'text-green-500' : 'text-gray-500'
                        }`}
                      />
                      <Avatar src={avatar} alt={name} />
                    </ListItemIcon>
                    <ListItemText primary={name} sx={{ color: '#FFF' }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
      {isLoading && (
        <div className="w-full flex justify-center items-center pb-4">
          <CircularProgress size={24} className="text-slackLight" />
        </div>
      )}
    </>
  )
}
