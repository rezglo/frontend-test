import React from 'react'
import { NewChannelModal } from '../modals/NewChannelModal'
import { useDispatch, useSelector } from 'react-redux'
import { openNewChannelModal } from '../../store/ui/uiSlice'

export const AddNewChannelButton = () => {

  const dispatch = useDispatch()
  const { isOpen } = useSelector(state=>state.ui.newChannelModal)

  const handleNewChannel = ()=>{
    dispatch(openNewChannelModal())
  }

  return (
    <>
      <button className='btn btn-primary' onClick={handleNewChannel}>
        Add Channel
      </button>
    
    </>
  )
}
