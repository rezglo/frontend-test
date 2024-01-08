import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setActiveChat } from '../../store/chats/chatsSlice'

export const MessagesListItem = ({ username, uid }) => {

  const dispatch = useDispatch()
  const { privateMessages } = useSelector(state=>state.chats.dms);
  const messagesWithCurrentContact = privateMessages.filter(message=>((message.senderId === uid) || (message.receiverId === uid) ));

  const handleSetActive = ()=>{
    dispatch(setActiveChat({
      info: {
        chatName: username,
        uid,
        type: 'private'
      },
      msgs: messagesWithCurrentContact
    }))
  }

  return (
    <Link onClick={handleSetActive} className='pl-4'><div className='rounded-full w-2 h-2 bg-green-700' /> {username} </Link>
  )
}
