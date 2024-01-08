import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { closeNewChannelModal } from '../../store/ui/uiSlice';
import { startCreatingChannel } from '../../store/chats/thunks';

export const NewChannelModal = () => {

  const [ formValues, handleInputChange, reset ] = useForm({
    chatName: ''
  });
  const { chatName } = formValues

  const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(chatName.length > 0){
          
          dispatch(startCreatingChannel(chatName))
          dispatch(closeNewChannelModal())

        }

        
    };

    const handleCloseModal = ()=>{
      dispatch(closeNewChannelModal())
    }

  return (
    <div className='fixed flex justify-center items-center z-50 left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0,0.3)]' >
        <div className='modal-box w-96 h-64' >
          <h3 className='font-bold text-lg' >New Channel</h3>
          <p className="py-4">Type the name of the new channel</p>
          <div className="">
            <form className='flex flex-col space-y-3' method='div' onSubmit={handleSubmit}>
              <input 
                type="text" 
                autoComplete='off'
                className='input input-bordered' 
                name='chatName'
                value={chatName}
                onChange={handleInputChange}
              />
              <div className='flex space-x-4 justify-end'>
                <button className={`btn ${ (chatName.length === 0) && 'btn-disabled'} btn-primary`}>Create</button>
                <button onClick={handleCloseModal} className="btn btn-warning">Cancel</button>
              </div>
            </form>
          </div>
        </div>
        </div>
  )
}
