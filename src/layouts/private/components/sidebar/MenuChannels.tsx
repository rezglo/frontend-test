import { useCallback, useState } from 'react'
import { ArrowDropDown, ArrowRight, LockOutlined, Remove } from '@mui/icons-material'
import {
  CircularProgress,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link, useParams } from 'react-router-dom'

import { Type } from '../../../../types.d'
import { CreateChannelDialog } from './CreateChannelDialog'
import { TYPE_CHANNEL_ACTION, useChannel } from '../../../../hooks'
import { Notification } from '../../../../components/notification'

export const MenuChannels = () => {
  const [openCreateChannelDialog, setOpenCreateChannelDialog] = useState(false)
  const [channelExpanded, setChannelExpanded] = useState(true)
  const { channels, isLoading, removeChannel } = useChannel({ type: TYPE_CHANNEL_ACTION.GET_ALL })
  const params = useParams()

  const handleOpenAddChannelDialog = useCallback(() => {
    setOpenCreateChannelDialog(true)
  }, [])

  const createHandleRemoveChannel = (id: string) => async () => {
    await removeChannel(id)
    Notification.success('Success Operation')
  }

  return (
    <>
      <ListItemButton
        onClick={() => {
          setChannelExpanded((current) => !current)
        }}
        className="text-white opacity-60"
      >
        <ListItemIcon className="min-w-[24px] mr-1">
          {channelExpanded ? (
            <ArrowDropDown className="text-white" />
          ) : (
            <ArrowRight className="text-white" />
          )}
        </ListItemIcon>
        <ListItemText primary="Channels" />
      </ListItemButton>
      {!isLoading && (
        <Collapse in={channelExpanded} timeout="auto" unmountOnExit className="opacity-60">
          <List disablePadding className="flex justify-center items-start flex-col">
            {channels.map((channel) => (
              <Link key={channel.id} to={`/channel/${channel.id}`} className="w-full">
                <ListItem disablePadding>
                  <ListItemButton
                    selected={params.channelId == channel.id}
                    className="h-[36px] pl-10"
                  >
                    <ListItemIcon className="text-xl justify-center mr-2 min-w-[24px] text-white">
                      {channel.type === Type.PRIVATE ? <LockOutlined /> : '#'}
                    </ListItemIcon>
                    <ListItemText primary={channel.name} sx={{ color: '#FFF' }} />
                    <IconButton
                      onClick={createHandleRemoveChannel(channel.id)}
                      className="opacity-0 group-hover:opacity-100 w-[30px] h-[30px] text-white"
                    >
                      <Remove />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <ListItem
              className="flex text justify-center items-center border-2 border-solid border-slackLight w-[90%] ml-4 my-3"
              disablePadding
              onClick={handleOpenAddChannelDialog}
            >
              <ListItemButton className="h-[36px] pl-10 w-full">
                <ListItemText
                  className="text-center"
                  primary="Add new channel"
                  sx={{ color: '#FFF' }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      )}
      {isLoading && (
        <div className="w-full flex justify-center items-center pb-4">
          <CircularProgress size={24} className="text-slackLight" />
        </div>
      )}
      <CreateChannelDialog
        open={openCreateChannelDialog}
        handleClose={() => setOpenCreateChannelDialog(false)}
      />
    </>
  )
}
