import { useUserStore } from '@/stores'
import { useFloatMenu } from '@/hooks'
import { useDirectMessageStore } from '@/stores/directMessage'
import { EditMessage, MessageMenuOptions } from '@/components/message'
import { ContentMessage } from './ContentMessage'

interface Props {
  idSender: string
  idMessage: string
  message: string
  timestamp: string
}

export const Message: React.FC<Props> = ({ idSender, message, timestamp, idMessage }) => {
  const authUser = useUserStore((state) => state.authUser)

  const [removeMessageFromDirectMessage, editMessageFromDirectMessage] = useDirectMessageStore(
    (state) => [state.removeMessageFromDirectMessage, state.editMessageFromDirectMessage],
  )

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
            <ContentMessage
              message={message}
              onOpenMenu={onOpenMenu}
              timestamp={timestamp}
              ref={elementRef}
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
            elementRef={elementRef}
            isShowMenu={isShowMenu}
            onClose={onCloseMenu}
            onRemove={handleRemoveMessage}
            onEdit={activeEditMode}
          />
        </div>
      </div>
    </div>
  )
}
