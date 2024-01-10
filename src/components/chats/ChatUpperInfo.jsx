import React from 'react'
import { useSelector } from 'react-redux';

export const ChatUpperInfo = () => {

    const { activeChat } = useSelector(state => state.chats)
    const { info } = activeChat;

    const isChannel = info.type === 'channel'

    return (
        <div className=' lg:ml-8 mt-2 ml-16 ' >
            <div>
                <h3>
                    {isChannel ? <b> <i>#</i> {info.chatName}</b>
                        :
                        <b className='flex mb-4 mt-4'>
                            <i className='mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </i>
                            {info.chatName}
                        </b>
                    }
                </h3>
                {isChannel && <span className='text-gray-500'>3 members</span>}
            </div>
        </div>
    )
}
