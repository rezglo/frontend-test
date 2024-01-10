import React from 'react'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../../store/ui/uiSlice';

export const ToggleSidebarButton = () => {

    const dispatch = useDispatch();

    const handleOpenSidebar = ()=>{
        dispatch(openSidebar())
    }

    return (
        <div className='flex absolute top-1'>
            <abbr title="Menu">
                <label htmlFor="my-drawer-2" onClick={handleOpenSidebar} className="btn btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
            </abbr>
        </div>
    )
}
