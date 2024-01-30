import { Outlet } from 'react-router-dom'
import TopBarComponent from '@/components/nav-bar/top-bar/TopBarComponent'
import LeftBarComponent from '@/components/nav-bar/left-bar/LeftBarComponent'
import MobileBottomNavBarComponent from '@/components/nav-bar/mobile-bottom-bar/MobileBottomNavBarComponent'

function Layout() {
  return (
    <div className="w-full h-screen min-[981px]:h-screen min-[981px]:overflow-hidden ma flex flex-col max-[981px]:justify-between bg-gradient-to-br from-[#82418a] to-[#350d36] min-[981px]:pb-1 min-[981px]:pr-1">
      <div className="h-full flex flex-col">
        <TopBarComponent />

        <div className="w-full h-full flex flex-row justify-start">
          <LeftBarComponent />

          <div id="content" className="w-full h-full bg-white min-[981px]:rounded-b-md min-[981px]:rounded-t-md max-[981px]:rounded-t-lg">
            <Outlet />
          </div>
        </div>
      </div>

      {/* <div className="h-full bg-white min-[981px]:hidden"></div> */}

      <MobileBottomNavBarComponent />
    </div>
  )
}

export default Layout
