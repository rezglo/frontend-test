import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'

import { useState, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  label: string
}

export default function ModalDefault ({ children, label }: Props) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <div>
      <Button variant='text' sx={{ outline: '0px', border: 0 }} onClick={handleOpen}>
        {label}
      </Button>
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
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
