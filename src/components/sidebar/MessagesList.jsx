import React from 'react'
import { MessagesListItem } from './MessagesListItem'
import { useSelector } from 'react-redux'

export const MessagesList = () => {

    const { contacts } = useSelector(state=>state.chats.dms)

    return (
        <ul className="menu p-4 w-80 text-base ">
            <h3 className='pl-4 text-lg'>Direct Messages</h3>
            {
                contacts.map(contact=>(
                    <li className='mb-1' key={contact.uid} ><MessagesListItem username={contact.username} uid={contact.uid} /></li>
                ))
            }
        </ul>
    )
}
