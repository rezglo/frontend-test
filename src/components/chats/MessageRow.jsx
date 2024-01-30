import ProfileImageComponent from '../profile/ProfileImageComponent'
import { useState } from 'react'

function MessageRow({ message }) {
  const user = message.from

  return (
    <div className="w-full min-h-16 mb-1 border-gray-300 pl-11 pr-10 py-2">
      <div className="flex flex-row items-start mb-2">
        <div className="h-8 w-8 mr-3">
          <ProfileImageComponent alt={user.firstName} isOnline={user.isOnline} imagePath={user.imagePath} />
        </div>

        <div className="w-full">
          <span className="mr-2 font-bold text-[14px]">{user.firstName} {user.lastName}</span>
          <span className="text-[10px]">{message.date}</span>
          <div className="text-xs">
            {message.text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageRow