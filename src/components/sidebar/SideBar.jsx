import React from 'react'
import { ChannelList } from './ChannelList'
import { MessagesList } from './MessagesList'
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from '../../store/auth/authSlice'
import { chatsLogout } from '../../store/chats/chatsSlice'

export const SideBar = () => {

    const dispatch = useDispatch()

    
    const {username} = useSelector(state=>state.auth)

    const handleLogout = ()=>{
        dispatch(chatsLogout())
        dispatch(authLogout());
    }

    return (
        <div className=" drawer-open ">
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
