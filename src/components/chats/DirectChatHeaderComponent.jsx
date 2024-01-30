import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import ProfileImageComponent from '../profile/ProfileImageComponent'
import { useAppDispatch } from '@/hooks/customReduxHooks'
import { setShowOnMobile } from '@/features/chat/chatSlice'

function DirectChatHeaderComponent({ name, isOnline, imagePath }) {
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

        <div className="flex flex-row items-center">
          <div className="h-7 w-7 mr-3">
            <ProfileImageComponent alt={name} imagePath={imagePath} isOnline={isOnline} />
          </div>
          <span className="font-bold text-lg">{name}</span>
        </div>
      </div>

      <div>
        Options
      </div>
    </div>
  )
}

export default DirectChatHeaderComponent