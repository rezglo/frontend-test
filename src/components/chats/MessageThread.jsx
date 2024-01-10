import React from 'react'
import { MessageBubble } from './MessageBubble'
import { users } from '../../data/fake-data'
import { useSelector } from 'react-redux'



export const MessageThread = () => {

  
  const { activeChat } = useSelector(state => state.chats)
  const { msgs } = activeChat


  return (

    <div className='mx-8 mt-5 flex-[3]'>

      {msgs.map(text => {

        const user = users.filter(user => user.uid === text.senderId)[0]
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
