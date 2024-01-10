import React from 'react'
import { NewChannelModal } from '../modals/NewChannelModal'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar, openNewChannelModal } from '../../store/ui/uiSlice'

export const AddNewChannelButton = () => {

  const dispatch = useDispatch()
  

  const handleNewChannel = ()=>{
    dispatch(openNewChannelModal())
    
    if(screen.width<1024){
      dispatch(closeSidebar())
    }
  }

  return (
    <>
      <button className='btn btn-primary' onClick={handleNewChannel}>
        Add Channel
      </button>
    
    </>
  )
}
