import React from 'react'
import { MessageThread } from './MessageThread'
import { TextBox } from './TextBox'
import { useSelector } from 'react-redux'
import { ChatUpperInfo } from './ChatUpperInfo'

export const ChatsDisplay = () => {

    

    return (
        <div className='h-full'>
            <ChatUpperInfo />
            <hr />
            <div className='flex flex-col h-full '>
                <MessageThread />
                <TextBox />
            </div>
            
        </div>
    )
}
