import React from 'react'
import { NothingSelected } from './NothingSelected'
import { ChatsDisplay } from './chats/ChatsDisplay'
import { useSelector } from 'react-redux'

export const MainContent = () => {
  const {activeChat} = useSelector(state=>state.chats)
  const isChatSelected = !!activeChat.msgs

  return (
    <div className='w-full h-vh'>
      {
        (isChatSelected) ? <ChatsDisplay /> : <NothingSelected />
      }

    </div>
  )
}
