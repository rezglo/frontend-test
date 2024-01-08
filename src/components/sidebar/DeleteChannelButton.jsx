import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteChannel } from '../../store/chats/chatsSlice'

export const DeleteChannelButton = () => {

  const dispatch = useDispatch()
  const { activeChat } = useSelector(state=>state.chats)
  const isChannelActive = (activeChat.info?.type === 'channel') ? true : false

  const handleDeleteChannel = ()=>{
    dispatch(deleteChannel(activeChat.info.chatId))
  };

  return (
    <button onClick={handleDeleteChannel} className={`btn btn-error ${ !isChannelActive && 'btn-disabled'}`}>Delete Channel</button>
  )
}
