import { IconButton, Typography } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

import { useUserStore } from '../../../store'
import { useDirectMessageStore } from '../../../store/directMessage'
import { useFloatMenu } from '../../../hooks'
import { MenuOptions } from '../../channel/components/MenuOptions'
import { EditMessage } from '../../channel/components/EditMessage'

interface Props {
  idSender: string
  idMessage: string
  message: string
  timestamp: string
}

const formatDate = (timestamp: string) => new Date(timestamp).toLocaleTimeString('en-US')

export const Message: React.FC<Props> = ({ idSender, message, timestamp, idMessage }) => {
  const authUser = useUserStore((state) => state.authUser)
  const [removeMessageFromDirectMessage, editMessageFromDirectMessage] = useDirectMessageStore(
    (state) => [state.removeMessageFromDirectMessage, state.editMessageFromDirectMessage],
  )
  const { floatMenuRef, onOpenMenu, onCloseMenu, isEditMode, disableEditMode, activeEditMode } =
    useFloatMenu()

  const localeDate = formatDate(timestamp)
  const messageBelongToAuthUser = authUser?.id === idSender

  const handleRemoveMessage = () => {
    removeMessageFromDirectMessage(idMessage)
  }

  const handleEditMessage = (editedMessage: string) => {
    editMessageFromDirectMessage({ idMessage, editedMessage })
  }

  return (
    <div className="flex flex-col justify-center w-full mb-6">
      <div className={`flex relative ${messageBelongToAuthUser ? 'justify-end' : 'justify-start'}`}>
        <div className="flex items-center justify-start gap-3 bg-white hover:bg-[#f3f3f3] rounded-lg p-2 max-w-md w-full">
          {!isEditMode && (
            <div className="flex flex-col justify-center items-start w-full">
              <div className="flex justify-between items-center  w-full">
                <Typography variant="caption" className="text-[15px]">
                  {message}
                </Typography>

                <IconButton onClick={onOpenMenu} className="text-gray-400 ">
                  <MoreVert className="text-lg" />
                </IconButton>
              </div>
              <div className="text-black capitalize font-bold text-sm flex justify-end items-end gap-3 w-full h-full ">
                <Typography variant="caption" className="text-[12px] text-gray-400 font-normal">
                  {localeDate}
                </Typography>
              </div>
            </div>
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
  )
}
