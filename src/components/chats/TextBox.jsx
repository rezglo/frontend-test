import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startSendingMessageToChannel, startSendingPrivateMessage } from '../../store/chats/thunks'

export const TextBox = () => {


    const dispatch = useDispatch()
    const { info } = useSelector(state=>state.chats.activeChat)
    const { uid }= useSelector(state=>state.auth)
    const [formValues, handleInputChange, reset]= useForm({
        text: ''
    })
    const {text} = formValues;

    const isTextEmpty = (text.length > 0) ? false : true

    const handleSendText = (e)=>{
        e.preventDefault();

        if(!isTextEmpty){
            (info.type === 'channel') 
                ? dispatch(startSendingMessageToChannel(text, uid, info.chatId))
                : dispatch(startSendingPrivateMessage( text, uid, info.uid ))
            reset()
        }
    }

    return (
        <form className='flex flex-col flex-1 m-4 mb-24' onSubmit={handleSendText}>
            <textarea 
                style={{ resize: 'none' }} 
                rows={4} 
                className="textarea textarea-bordered w-full" 
                placeholder="Write a message..."
                name='text'
                value={text}
                onChange={handleInputChange} 
            />
            <button className={`btn ${ isTextEmpty && 'btn-disabled' } btn-primary mt-4 self-end w-32`}>
                <p>Send</p>
                <i >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </i>
            </button>
        </form>
    )
}
