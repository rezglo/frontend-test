import React from 'react'
import { MessagesListItem } from './MessagesListItem'

const users = [
    {
        username: 'Maria',
        uid: 3
    },
    {
        username: 'Jose',
        uid: 2
    }
]

export const MessagesList = () => {
    return (
        <ul className="menu p-4 w-80 text-base ">
            <h3 className='pl-4 text-lg'>Direct Messages</h3>
            {
                users.map(user=>(
                    <li className='mb-1' key={user.uid} ><MessagesListItem username={user.username} /></li>
                ))
            }
        </ul>
    )
}
