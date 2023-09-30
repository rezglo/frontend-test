import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { type FormEvent, useState, type ChangeEvent } from 'react'
import { Button, IconButton, TextField } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { useChannelStore } from '../../store/channels'
import { type UUID } from '../../store/types'

interface Props {
  id: UUID
  message: string
}

export default function ModalMessage ({ id, message }: Props) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState(message)

  const editMessage = useChannelStore(state => state.editMessage)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editMessage(id, input)
    setOpen(false)
  }

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="edit" size="medium">
          <EditNoteIcon fontSize="inherit" />
      </IconButton>
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
          <Box sx={
            {
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: '16px',
              boxShadow: 24,
              p: 4
            }
          }>
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
          value={input}
        />
        <Button type='submit' variant="contained" color="info">
          Editar Mensaje
        </Button>
      </Box>

          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
