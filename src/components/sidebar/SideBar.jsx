import React, { useRef } from 'react'
import { ChannelList } from './ChannelList'
import { MessagesList } from './MessagesList'
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from '../../store/auth/authSlice'
import { chatsLogout } from '../../store/chats/chatsSlice'
import { closeSidebar } from '../../store/ui/uiSlice'

export const SideBar = () => {

    const dispatch = useDispatch()

    
    const {username} = useSelector(state=>state.auth)
    const { sidebar } = useSelector(state=>state.ui)

    const handleLogout = ()=>{
        dispatch(chatsLogout());
        dispatch(authLogout());
        if (screen.width<1024) {
            dispatch(closeSidebar())
        }
    };

    

    


    return (
        <div id='sidebar' className={`drawer-open absolute transition-transform duration-300 left-[-320px] ${ sidebar.isOpen && 'translate-x-[320px]' } z-20 lg:relative lg:left-0`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side h-min-full bg-base-200  text-base-content">

                <h2 className=' text-2xl ml-3 mb-4 mt-2 ' >{username}</h2>
                <hr />

                <ChannelList />
                <hr />

                <MessagesList />
                <hr />

                <button className='btn btn-error ml-8 mt-7' onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}
