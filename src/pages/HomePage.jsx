import { useAppSelector } from '@/hooks/customReduxHooks'

import ChatComponent from '@/components/chats/ChatComponent'
import ChatListComponent from '@/components/chats/ChatListComponent'

function HomePage() {
  const { activeWorkSpace = null } = useAppSelector((state) => state.workSpace)

  return (
    <div id="content" className="h-full w-full flex flex-row">
      <div id="sidebar" className="w-1/3 max-[981px]:w-full min-[981px]:max-w-[325px] h-full max-[981px]:bg-white bg-purple-100 rounded-l-md max-[981px]:rounded-r-md max-[981px]:pt-4">
        {activeWorkSpace && <div className="max-[981px]:hidden w-full px-4 flex flex-col justify-center items-center mt-4">
          <div className="w-full max-w-72">
            <p className="max-w-72 text-lg font-bold text-start">{activeWorkSpace.name}</p>
          </div>
        </div>}
        <ChatListComponent type="users-channels" />
      </div>
      <div id="sidebar" className="max-[981px]:hidden w-full h-full bg-white min-[981px]:rounded-r-md max-[981px]:rounded-t-lg">
        <ChatComponent />
      </div>
    </div>
  )
}

export default HomePage
