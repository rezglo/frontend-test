import { useUserStore } from '../../store/users'
import { useChannelStore } from '../../store/channels'
import { Box, TextField, Button } from '@mui/material'
import ModalDefault from '../Modal/Modal'

import { type ChangeEvent, useState, type FormEvent } from 'react'
import { type InputChannel } from '../../store/types'

function ModalChannel () {
  const perfil = useUserStore(state => state.perfil)
  const addChannel = useChannelStore(state => state.addChannel)
  const [form, setForm] = useState({ name: '', owner: perfil } as InputChannel)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prevState => {
      return {
        ...prevState,
        name: e.target.value
      }
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addChannel(form)
    /* setOpen(false) */
  }
  return (
    <ModalDefault label="Añadir canal">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 3,
          alignItems: 'center'
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={handleChange}
          name='name'
          label="Nombre del Canal"
          type="text"
          variant="standard"
        />
        <Button type='submit' variant="contained" color="info">
          Crear canal
        </Button>
      </Box>
    </ModalDefault>
  )
}

export default ModalChannel
