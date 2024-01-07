import React from 'react'
import { Link } from 'react-router-dom'

export const MessagesListItem = ({ username }) => {
  return (
    <Link className='pl-4'><div className='rounded-full w-2 h-2 bg-green-700' /> {username} </Link>
  )
}
