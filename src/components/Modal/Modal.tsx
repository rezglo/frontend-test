import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { useUserStore } from '../../store/users'
import { useChannelStore } from '../../store/channels'
import { type ChangeEvent, useState, type FormEvent } from 'react'
import { type InputChannel } from '../../store/types'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function ChannelModal () {
  const [open, setOpen] = useState(false)
  const perfil = useUserStore(state => state.perfil)
  const [form, setForm] = useState({ name: '', owner: perfil } as InputChannel)
  const addChannel = useChannelStore(state => state.addChannel)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
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
    setOpen(false)
  }

  return (
    <div>
      <Button variant='text' sx={{ outline: '0px', border: 0 }} onClick={handleOpen}>Añadir canal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 3,
                alignItems: 'center',
                border: 'none'
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
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
