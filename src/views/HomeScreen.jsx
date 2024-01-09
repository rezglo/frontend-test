import React, { useEffect } from 'react'
import { SideBar } from '../components/sidebar/SideBar'
import { MainContent } from '../components/Main Content'
import { useDispatch } from 'react-redux'
import { startLoadingChats } from '../store/chats/thunks'

export const HomeScreen = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
  
    dispatch(startLoadingChats())
    
  }, [])
  

  return (
    <div className='flex h-screen overflow-hidden' >
        
            <SideBar />
            <MainContent />
        
    </div>
  )
}
