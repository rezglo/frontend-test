import React from 'react'
import { SideBar } from '../components/sidebar/SideBar'
import { MainContent } from '../components/Main Content'

export const HomeScreen = () => {
  return (
    <div className='flex overflow-hidden' >
        
            <SideBar />
            <MainContent />
        
    </div>
  )
}
