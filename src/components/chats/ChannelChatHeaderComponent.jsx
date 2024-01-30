import { LockClosedIcon, HashtagIcon } from '@heroicons/react/24/outline'

function ChannelChatHeaderComponent({ name, isPublic}) {
  return (
    <div className="w-full h-16 bg-white border-b-[1px] border-gray-300 flex flex-row px-5 py-2 justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="w-5 h-5 mr-3">
          {isPublic
            ? <HashtagIcon />
            : <LockClosedIcon />
          }
        </div>
        <span className="font-bold text-lg">{name}</span>
      </div>

      <div>
        Options
      </div>
    </div>
  )
}

export default ChannelChatHeaderComponent