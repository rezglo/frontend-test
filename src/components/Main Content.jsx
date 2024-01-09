import React from 'react'
import { NothingSelected } from './NothingSelected'
import { ChatsDisplay } from './chats/ChatsDisplay'
import { useSelector } from 'react-redux'
import { NewChannelModal } from './modals/NewChannelModal'
import { EditMessageModal } from './modals/EditMessageModal'
import { ToggleSidebarButton } from './sidebar/ToggleSidebarButton'

export const MainContent = () => {
  const { newChannelModal, editMessageModal } = useSelector(state => state.ui)
  const { activeChat } = useSelector(state => state.chats)
  const isChatSelected = !!activeChat.msgs

  return (
    <div className='w-full h-vh'>
      <ToggleSidebarButton />
      {
        (isChatSelected) ? <ChatsDisplay /> : <NothingSelected />
      }
      {
        newChannelModal.isOpen && <NewChannelModal />
      }
      {
        editMessageModal.isOpen && <EditMessageModal />
      }

    </div>
  )
}
