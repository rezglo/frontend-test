import React from 'react'
import { Link } from 'react-router-dom'

export const ChannelListItem = ( {channelName} ) => {
  return (
    <Link className='pl-4'><b>#</b> {channelName} </Link>
  )
}
