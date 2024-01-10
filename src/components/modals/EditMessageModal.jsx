import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { editMessageInChannel, editPrivateMessage } from '../../store/chats/chatsSlice'
import { closeEditTextModal } from '../../store/ui/uiSlice'

export const EditMessageModal = () => {

  const dispatch = useDispatch()

  const { messageId } = useSelector(state => state.ui.editMessageModal);
  const { activeChat } = useSelector(state => state.chats)
  const { info, msgs } = activeChat

  const message = msgs.filter(msg => msg.messageId === messageId)[0]

  const [formValues, handleInputChange] = useForm({
    text: message.text
  });

  const { text } = formValues;

  const handleEditMessage = (e) => {

    e.preventDefault();

    (info.type === 'channel')
      ? dispatch(editMessageInChannel({
        messageId,
        text
      }))
      : dispatch(editPrivateMessage({
        messageId,
        text
      }))

    dispatch(closeEditTextModal());

  }

  return (
    <div className='fixed flex justify-center items-center z-50 left-0 top-0 right-0 bottom-0 bg-[rgb(0,0,0,0.3)]' >
      <div className='modal-box w-auto h-64' >
        <h3 className='font-bold text-lg' >Edit Message</h3>
        
          <form className='flex flex-col space-y-3' onSubmit={handleEditMessage} >
            <textarea
              className='input input-bordered w-96 h-24 mt-6'
              style={{ resize: 'none' }}
              rows={3}
              name='text'
              value={text}
              onChange={handleInputChange}
            />
            <div className='flex space-x-4 justify-end'>
              <button className={`btn ${(text.length === 0) && 'btn-disabled'} btn-primary px-8`}>Edit</button>
            </div>
          </form>
        
      </div>
    </div>
  )
}
