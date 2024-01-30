import { HomeIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function MobileBottomNavBarComponent() {
  return (
    <div id="bottom-nav-bar" className=" min-[981px]:hidden w-full sticky bottom-0 left-0 z-50 bg-white h-16 border-t-slate-300 border-[1px] flex flex-row justify-center items-center">
      <div>
        <Link to="/" autoFocus={true} id="home-button" className="w-full flex flex-col justify-center items-center rounded-lg cursor-pointer p-1">
          <HomeIcon className="w-7 h-7" color="gray" />
          <p className="text-[10px] font-bold text-gray-700">Home</p>
        </Link>
      </div>

      <div className="w-10"></div>

      <div>
        <Link to="/direct-messages" id="direct-messages-button" className="w-full flex flex-col justify-center items-center mt-1 rounded-lg cursor-pointer p-1">
          <ChatBubbleLeftRightIcon className="w-7 h-7" color="gray" />
          <p className="text-[10px] font-bold text-gray-700">Direct messages</p>
        </Link>
      </div>
    </div>
  )
}

export default MobileBottomNavBarComponent
