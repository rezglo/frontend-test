import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { useAuthData } from '@/hooks/useAuthData'
import { useAppDispatch } from '@/hooks/customReduxHooks'
import { useFetchWorkSpaceListQuery } from '@/features/api/apiSlice'
import { setActiveWorkSpace } from '@/features/workSpace/workSpaceSlice'

import ProfileImageComponent from '@/components/profile/ProfileImageComponent'

import './LeftBarComponent.css'

function LeftBarComponent() {

  const dispatch = useAppDispatch()
  const { authUser } = useAuthData()
  const { data = { workspaces: [] } } = useFetchWorkSpaceListQuery()

  useEffect(() => {
    const workspaces = data.workspaces
    if (workspaces.length > 0) {
      dispatch(setActiveWorkSpace(workspaces[0]))
    }
  }, [data])
  // - TODO: Change the active work space

  return (
    <div id="left-bar" className="w-[74px] max-[981px]:hidden flex flex-col justify-between items-center">
      <div>
        {data.workspaces.length > 0 && <div id="workspaces" className="w-10 flex flex-col mx-auto justify-start items-center pb-2">
          {data.workspaces.map(workspace => (
            <div id={`workspace-${workspace.id}`} key={workspace.id} className="w-full h-10 bg-slate-500 p-1 mt-2 rounded-lg cursor-pointer">
              <img src={workspace.logo} alt={workspace.name} className="w-full h-full" />
            </div>
          ))}
        </div>}

        <div id="nav-buttons" className="flex flex-col mx-auto justify-start items-center py-1">
          <Link to="/" autoFocus={true} id="home-button" className="w-full flex flex-col justify-center items-center rounded-lg cursor-pointer hover:bg-[#8a6c9d] p-1">
            <HomeIcon className="w-7 h-7" color="white" />
            <p className="text-[10px] text-white font-bold">Home</p>
          </Link>

          <Link to="/direct-messages" id="direct-messages-button" className="w-full flex flex-col justify-center items-center mt-1 rounded-lg cursor-pointer hover:bg-[#8a6c9d] p-1">
            <ChatBubbleLeftRightIcon className="w-7 h-7" color="white" />
            <p className="text-[10px] text-white font-bold">Direct</p>
            <p className="text-[10px] text-white font-bold">messages</p>
          </Link>
        </div>
      </div>

      <div id="profile" className="w-12 flex flex-col mx-auto justify-start items-center py-1 pb-3">
        {authUser && <div className="w-ful h-12 rounded-lg cursor-pointer p-1 mt-2">
          {/* <img src={authUser.imagePath} alt={authUser.username} className="w-full h-full" /> */}
          <ProfileImageComponent imagePath={authUser.imagePath} alt={authUser.username} isOnline={true}/>
        </div>}
      </div>
    </div>
  )
}

export default LeftBarComponent
