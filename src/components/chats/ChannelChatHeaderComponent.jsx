import { LockClosedIcon, HashtagIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useAppDispatch } from '@/hooks/customReduxHooks'
import { setShowOnMobile } from '@/features/chat/chatSlice'

function ChannelChatHeaderComponent({ name, isPublic, totalMembers = 0 }) {
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(setShowOnMobile({ setShowOnMobile: false }))
  }

  return (
    <div className="w-full h-16 bg-white border-b-[1px] border-gray-300 flex flex-row px-5 py-2 justify-between items-center">
      <div className="flex flex-row items-center">
        <button className="min-[981px]:hidden h-10 w-10 mr-5 font-bold" onClick={handleOnClick}>
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </button>

        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row items-center">
            <div className="w-4 h-4 mr-1">
              {isPublic
                ? <HashtagIcon className="font-bold" />
                : <LockClosedIcon className="font-bold" />
              }
            </div>
            <span className="font-bold text-xs">{name}</span>
          </div>
          <div className="flex flex-row items-center pl-1">
            <span className="text-[10px]">{totalMembers} members</span>
          </div>
        </div>
      </div>

      <div>
        Options
      </div>
    </div>
  )
}

export default ChannelChatHeaderComponent