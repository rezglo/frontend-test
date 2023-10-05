import { Avatar, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { MoreVert } from '@mui/icons-material'

import { useChannelStore, useUserStore } from '../../../store'
import { MenuOptions } from './MenuOptions'
import { useFloatMenu } from '../../../hooks'
import { EditMessage } from './EditMessage'

interface Props {
  idSender: string
  idMessage: string
  name: string
  avatar: string
  message: string
  timestamp: string
}

const formatDate = (timestamp: string) => new Date(timestamp).toLocaleTimeString('en-US')

export const Message: React.FC<Props> = ({
  idSender,
  idMessage,
  name,
  avatar,
  message,
  timestamp,
}) => {
  const localeDate = formatDate(timestamp)
  const authUser = useUserStore((state) => state.authUser)
  const [removeMessage, editMessageFromChannel] = useChannelStore((state) => [
    state.removeMessageFromChannel,
    state.editMessageFromChannel,
  ])

  const { floatMenuRef, onOpenMenu, onCloseMenu, isEditMode, disableEditMode, activeEditMode } =
    useFloatMenu()

  const messageBelongToAuthUser = authUser?.id === idSender

  const handleRemoveMessage = () => {
    removeMessage(idMessage)
  }

  const handleEditMessage = (editedMessage: string) => {
    editMessageFromChannel({ idMessage, editedMessage })
  }

  return (
    <div className="flex flex-col justify-center w-full mb-6">
      <div
        className={`flex gap-2 relative ${
          messageBelongToAuthUser ? 'justify-end' : 'justify-start'
        }`}
      >
        {!messageBelongToAuthUser && (
          <Link to={`/direct-message/${idSender}`} className="ml-[10px]">
            <Avatar
              className="cursor-pointer w-[40px] h-[40px]"
              src={avatar}
              alt={`${name} ${idSender} - Image`}
            />
          </Link>
        )}
        <div className="flex items-start justify-start gap-3 bg-white hover:bg-[#f3f3f3] rounded-lg p-2 max-w-md w-full">
          <div className="flex flex-col justify-center items-start w-full ">
            {!isEditMode && (
              <>
                <div className="w-full text-black capitalize font-bold text-sm flex justify-between items-center gap-3">
                  <p>{name}</p>
                  <IconButton onClick={onOpenMenu} className="text-gray-400 ">
                    <MoreVert className="text-lg" />
                  </IconButton>
                </div>
                <Typography variant="caption" className="text-[15px]">
                  {message}
                </Typography>
                <div className="text-black capitalize font-bold text-sm flex justify-end items-end gap-3 w-full h-full ">
                  <Typography variant="caption" className="text-[12px] text-gray-400 font-normal">
                    {localeDate}
                  </Typography>
                </div>
              </>
            )}
            {isEditMode && (
              <EditMessage
                messageToEdit={message}
                onEditMessage={handleEditMessage}
                onDisableEditMode={disableEditMode}
              />
            )}
            <MenuOptions
              floatMenuRef={floatMenuRef}
              onClose={onCloseMenu}
              onRemove={handleRemoveMessage}
              onEdit={activeEditMode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
