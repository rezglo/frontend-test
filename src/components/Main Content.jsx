import React from 'react'
import { NothingSelected } from './NothingSelected'
import { ChatsDisplay } from './chats/ChatsDisplay'

export const MainContent = () => {
  return (
    <div className='w-full h-vh'>
        {/* <NothingSelected /> */}
        <ChatsDisplay />
    </div>
  )
}
