import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

import { useChannelStore, useUserStore } from '@/stores'
import { useFloatMenu } from '@/hooks'
import { EditMessage, MessageMenuOptions } from '@/components/message'
import { ContentMessage } from './ContentMessage'

interface Props {
  idSender: string
  idMessage: string
  name: string
  avatar: string
  message: string
  timestamp: string
}

export const Message: React.FC<Props> = ({
  idSender,
  idMessage,
  name,
  avatar,
  message,
  timestamp,
}) => {
  const authUser = useUserStore((state) => state.authUser)
  const [removeMessage, editMessageFromChannel] = useChannelStore((state) => [
    state.removeMessageFromChannel,
    state.editMessageFromChannel,
  ])

  const {
    onCloseMenu,
    onOpenMenu,
    isShowMenu,
    disableEditMode,
    activeEditMode,
    isEditMode,
    elementRef,
  } = useFloatMenu()

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
          <Link to={`/dashboard/direct-message/${idSender}`} className="ml-[10px]">
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
              <ContentMessage
                name={name}
                message={message}
                onOpenMenu={onOpenMenu}
                ref={elementRef}
                timestamp={timestamp}
              />
            )}
            {isEditMode && (
              <EditMessage
                messageToEdit={message}
                onEditMessage={handleEditMessage}
                onDisableEditMode={disableEditMode}
              />
            )}
            <MessageMenuOptions
              isShowMenu={isShowMenu}
              elementRef={elementRef}
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
