import React, { useEffect } from 'react'
import { SideBar } from '../components/sidebar/SideBar'
import { MainContent } from '../components/Main Content'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingChats } from '../store/chats/thunks'
import { closeSidebar } from '../store/ui/uiSlice'

export const HomeScreen = () => {
  
  const dispatch = useDispatch()
  const { isOpen } = useSelector(state=>state.ui.sidebar)

  useEffect(() => {
  
    dispatch(startLoadingChats())
    
  }, [])

  setTimeout(() => {
    const sidebar = document.getElementById('sidebar')
  }, 1); 
    
  const handleSidebarClick = ({target})=>{
    // console.log({target, sidebar})
    // console.log(sidebar.contains(target))
    if(isOpen && !sidebar.contains(target) && screen.width < 1024  ) {
      dispatch(closeSidebar())
    }
}
  

  return (
    <div className='flex h-screen overflow-hidden' onMouseDown={handleSidebarClick}>
        
            <SideBar />
            <MainContent />
            
        
    </div>
  )
}
