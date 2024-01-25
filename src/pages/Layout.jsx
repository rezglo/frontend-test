import { Outlet } from 'react-router-dom'
import TopBarComponent from '@/components/nav-bar/top-bar/TopBarComponent'
import LeftBarComponent from '@/components/nav-bar/left-bar/LeftBarComponent'
import MobileBottomNavBarComponent from '@/components/nav-bar/mobile-bottom-bar/MobileBottomNavBarComponent'

function Layout() {
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#82418a] to-[#350d36] min-[981px]:pb-1 min-[981px]:pr-1">
      <TopBarComponent />

      <div className="w-full h-full flex flex-row justify-start">
        <LeftBarComponent />

        <div id="content" className="w-full bg-white min-[981px]:rounded-b-md min-[981px]:rounded-t-md max-[981px]:rounded-t-lg">
          <Outlet />
        </div>

      </div>

      <MobileBottomNavBarComponent />
    </div>
  )
}

export default Layout