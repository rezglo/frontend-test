import React from 'react'
import { MessageThread } from './MessageThread'
import { TextBox } from './TextBox'
import { ChatUpperInfo } from './ChatUpperInfo'

export const ChatsDisplay = () => {

    

    return (
        <div className='h-full'>
            <ChatUpperInfo />
            <hr />
            <div className='flex flex-col h-full '>
                <div className='h-3/4 overflow-y-scroll'>
                    <MessageThread />
                </div>
                <div>
                    <TextBox />
                </div>
            </div>
            
        </div>
    )
}
