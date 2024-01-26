import { useLocation } from 'react-router-dom'
import { useAppSelector } from '@/hooks/customReduxHooks'
import { useAuthData } from '@/hooks/useAuthData'

import ProfileImageComponent from '@/components/profile/ProfileImageComponent'

import './TopBarComponent.css'

function TopBarComponent() {
  const location = useLocation()
  const { authUser } = useAuthData()
  const { activeWorkSpace = null} = useAppSelector(state => state.workSpace)

  const getMobilePageTitle = () => {
    switch (location.pathname) {
    case '/':
      return activeWorkSpace && activeWorkSpace.name ? activeWorkSpace.name: ''
    case '/direct-messages':
      return 'Direct Messages'

    default:
      return ''
    }
  }

  return (
    <div id="top-bar" className="w-full min-[981px]:h-[43px]">
      <div className="min-[981px]:hidden w-full px-4 pt-5">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row justify-start items-center">
            {activeWorkSpace && location.pathname === '/' &&
              <img src={activeWorkSpace.logo} alt={activeWorkSpace.name} className="w-9 h-9 rounded-lg p-0.5 mr-2 bg-slate-500" />
            }
            <span className="text-white font-bold text-3xl">{getMobilePageTitle()}</span>
          </div>

          {authUser && (
            <div className="w-9 h-9 rounded-lg">
              <ProfileImageComponent imagePath={authUser.imagePath} alt="profile-image" isOnline={true} />
            </div>
          )}
        </div>
        <input
          id="search-button-mobile"
          name="search"
          type="text"
          autoComplete="false"
          placeholder="Search or go to..."
          className="block w-full h-10 mb-4 rounded-md border-1 bg-[#bb9ccf] border-gray-400 py-1.5 text-white shadow-sm placeholder:text-white placeholder:text-lg focus:ring-1 focus:border-[#bb9ccf] focus:ring-[#bb9ccf] sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}

export default TopBarComponent
