import { Button } from '@mui/material'
import { useState, type FormEvent, type ChangeEvent } from 'react'
import './InputCHat.css'
import { useChannelStore } from '../../store/channels'
import { useUserStore } from '../../store/users'

function InputChat () {
  const [input, setInput] = useState('')
  const perfil = useUserStore(state => state.perfil)
  const currentChannel = useChannelStore(state => state.currentChannel)
  const sendMessage = useChannelStore(state => state.sendMessage)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value
    setInput(newInput)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (perfil !== undefined) {
      sendMessage({ author: perfil, message: input })
      setInput('')
    }
  }
  return (
    <form className='chat-form' onSubmit={handleSubmit}>
      <input value={input} onChange={handleChange} type="text" placeholder={`Enviar un mensaje a #${currentChannel?.name}`}/>
      <Button hidden type='submit' sx={{ display: 'none' }}>
        SEND
      </Button>
    </form>
  )
}

export default InputChat
