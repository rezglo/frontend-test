import React from 'react'
import { DeleteMessageButton } from './DeleteMessageButton'
import { EditMessageButton } from './EditMessageButton'
import moment from 'moment'

export const MessageBubble = ({ username, uid, timestamp, text, avatarURL, messageId }) => {

    const timeMoment = moment(timestamp)
    // const hours = timeMoment.format('LT')
    const hours = timeMoment.format('MMMM Do YYYY, h:mm')
    

    return (
        <div className='flex flex-shrink-0'>
            <div className="chat chat-start flex-shrink-0">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={avatarURL} />
                    </div>
                </div>
                <div className="chat-header">
                    {`${username} `}
                    <time className="text-xs opacity-50">{hours}</time>
                </div>
                <div className="chat-bubble">{text}</div>
            </div>
            <div className='self-end mb-3'>
                <DeleteMessageButton messageId={messageId} />
                <EditMessageButton messageId={messageId} />
            </div>
        </div>

    )
}
