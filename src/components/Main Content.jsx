import React from 'react'
import { NothingSelected } from './NothingSelected'
import { ChatsDisplay } from './chats/ChatsDisplay'
import { useSelector } from 'react-redux'
import { NewChannelModal } from './modals/NewChannelModal'

export const MainContent = () => {
  const { isOpen } = useSelector(state => state.ui.newChannelModal)
  const {activeChat} = useSelector(state=>state.chats)
  const isChatSelected = !!activeChat.msgs

  return (
    <div className='w-full h-vh'>
      {
        (isChatSelected) ? <ChatsDisplay /> : <NothingSelected />
      }
      {
      isOpen && <NewChannelModal />
      }

    </div>
  )
}
