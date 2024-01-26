import { LockClosedIcon, HashtagIcon } from '@heroicons/react/24/outline'

function ChannelRowComponent({ id, name, isPublic }) {
  // - TODO: Handle onClick event and fetch messages for this channel

  return (
    <div id={`channel-${id}`} className="w-full flex flex-row justify-start items-center rounded-md hover:bg-[#dcc9e8] px-2 my-2 py-1 cursor-pointer">
      {isPublic
        ? <LockClosedIcon className="w-[18px] h-[14px] ml-1 mr-2" />
        : <HashtagIcon className="w-[18px] h-[14px] ml-1 mr-2" />
      }
      <h6>{name}</h6>
    </div>
  )
}

export default ChannelRowComponent
