import React from 'react'
import { ChannelListItem } from './ChannelListItem'
import { AddNewChannelButton } from './AddNewChannelButton'
import { DeleteChannelButton } from './DeleteChannelButton'
import { useSelector } from 'react-redux'


export const ChannelList = () => {
        
    const { channels } = useSelector(state=>state.chats)
    
    return (
        <div>
            <ul className="menu p-4 w-80 list-none list-outside text-base">
                <h3 className='pl-4 text-lg' >Channels</h3> 
                {
                    channels.map(channel =>(
                        <li className='mb-1' key={channel.channelId}><ChannelListItem chatId={channel.channelId} chatName={channel.channelName} /></li>
                    ))
                }
            </ul>
            <div className='flex justify-center space-x-4 mb-6'>
                <AddNewChannelButton />
                <DeleteChannelButton />
            </div>
        </div>
    )
}
