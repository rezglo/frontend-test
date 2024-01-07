import React from 'react'
import { MessageBubble } from './MessageBubble'
import { users } from '../../data/fake-data'
const activeChannel =
    {
        channelName: 'general',
        channelId: 1,
        channelTexts: [
            {
                text: 'Hey, guys this is going to be the main channel',
                messageId: 1,
                timestamp: new Date(1698003000000).getTime(),
                user: {
                    uid: 1
                }
            },
            {
                text: 'Fantastic',
                messageId: 2,
                timestamp: new Date(1698004000000).getTime(),
                user: {
                    uid: 3
                }
            },
            {
                text: 'Looking forward to work with you',
                messageId: 3,
                timestamp: new Date(1698005000000).getTime(),
                user: {
                    uid: 2
                }
            },
            {
                text: 'Yeah, me too',
                messageId: 4,
                timestamp: new Date(1698006000000).getTime(),
                user: {
                    uid: 1
                }
            },
        ]
    }

export const MessageThread = () => {

    const { channelTexts } = activeChannel
    

  return (
    
    <div className='mx-8 mt-5 flex-[3]'>

        {channelTexts.map(text=>{

            const user = users.filter(user=>user.uid===text.user.uid)[0]
            const { username, uid, avatarURL } = user
            return <MessageBubble
                key={text.messageId} 
                username={username} 
                uid={uid} 
                avatarURL={avatarURL}
                timestamp={text.timestamp}
                messageId={text.messageId}
                text={text.text} 
            />
        })}
    </div>
  )
}
