import { HomeIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/customReduxHooks'
import { setShowOnMobile } from '@/features/chat/chatSlice'

function MobileBottomNavBarComponent() {
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(setShowOnMobile({ showOnMobile: false }))
  }

  return (
    <div id="bottom-nav-bar" className=" min-[981px]:hidden w-full sticky bottom-0 left-0 z-50 bg-white h-16 border-t-slate-300 border-[1px] flex flex-row justify-center items-center">
      <div>
        <Link
          id="home-button"
          to="/"
          className="w-full flex flex-col justify-center items-center rounded-lg cursor-pointer p-1"
          onClick={handleOnClick}
        >
          <HomeIcon className="w-7 h-7" color="gray" />
          <p className="text-[10px] font-bold text-gray-700">Home</p>
        </Link>
      </div>

      <div className="w-10"></div>

      <div>
        <Link
          id="direct-messages-button"
          to="/direct-messages"
          className="w-full flex flex-col justify-center items-center mt-1 rounded-lg cursor-pointer p-1"
          onClick={handleOnClick}
        >
          <ChatBubbleLeftRightIcon className="w-7 h-7" color="gray" />
          <p className="text-[10px] font-bold text-gray-700">Direct messages</p>
        </Link>
      </div>
    </div>
  )
}

export default MobileBottomNavBarComponent
