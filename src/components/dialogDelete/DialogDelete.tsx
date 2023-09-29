import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

interface Props {
  showModal: boolean
  onActionHide: () => void
  onActionDelete: () => void
  description: string
  loading?: boolean
  title?: string
}

const DialogDelete: React.FC<Props> = ({
  description,
  showModal,
  onActionHide,
  onActionDelete,
  loading = false,
  title = 'Are you sure you want to delete this item?'
}) => {
  return (
    <Dialog
      open={showModal}
      maxWidth={'sm'}
      fullWidth={true}
      onClose={() => onActionHide()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onActionHide()}>Cancel</Button>
        <Button
          disabled={loading}
          variant="contained"
          onClick={() => {
            onActionDelete()
          }}
        >
          {loading ? <CircularProgress size={28} /> : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogDelete
