import { LockClosedIcon, HashtagIcon } from '@heroicons/react/24/outline'
import { useFetchChannelMessageListMutation } from '@/features/api/apiSlice'
import { setData, clearData } from '@/features/chat/chatSlice'
import { useAppDispatch } from '@/hooks/customReduxHooks'

function ChannelRowComponent({ id, name, isPublic }) {
  // - TODO: Handle onClick event and fetch messages for this channel
  const [fetchChannelMessages, { isLoading, isError }] = useFetchChannelMessageListMutation()
  const dispatch = useAppDispatch()

  const handleOnClick = async () => {
    const response = await fetchChannelMessages({ channelId: id })
    const channel = response.data

    if (channel) {
      dispatch(setData({
        chatType: 'Channel',
        customData: {
          name: channel.name,
          isPublic: channel.public
        }, users: channel.users,
        messages: channel.messages
      }))
    } else {
      console.error('Channel not found. Id:', id)
      dispatch(clearData())
    }
  }

  return (
    <div
      id={`channel-${id}`}
      className="w-full flex flex-row justify-start items-center rounded-md hover:bg-[#dcc9e8] px-2 my-2 py-1 cursor-pointer"
      onClick={handleOnClick}
    >
      {isPublic
        ? <HashtagIcon className="w-[18px] h-[14px] ml-1 mr-2" />
        : <LockClosedIcon className="w-[18px] h-[14px] ml-1 mr-2" />
      }
      <h6>{name}</h6>
    </div>
  )
}

export default ChannelRowComponent
