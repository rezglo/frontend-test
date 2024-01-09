import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setActiveChat } from '../../store/chats/chatsSlice';
import { closeSidebar } from '../../store/ui/uiSlice';

export const ChannelListItem = ( {chatName, chatId} ) => {

  const dispatch = useDispatch();
  const { channels } = useSelector(state=>state.chats)
  const currentChannel = channels.filter(channel=>channel.channelId === chatId)[0];

  const handleSetActive = ()=>{
    dispatch(setActiveChat({
      info: {
        chatName,
        chatId,
        type: 'channel'
      },
      msgs: currentChannel.channelTexts
    }));
    
  }

  return (
    <Link onClick={handleSetActive} className='pl-4'><b>#</b> {chatName} </Link>
  )
}   
