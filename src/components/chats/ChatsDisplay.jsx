import React from 'react'
import { MessageThread } from './MessageThread'
import { TextBox } from './TextBox'

export const ChatsDisplay = () => {
    return (
        <div className='h-full'>
            <div className='ml-8 mt-2' >
                <h3><b># business</b></h3>
                <span className='text-gray-500'>3 members</span>
            </div>
            <hr />
            <div className='flex flex-col h-full '>
                <MessageThread />
                <TextBox />
            </div>
            
        </div>
    )
}
