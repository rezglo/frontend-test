import React, { useEffect, useState } from 'react'

import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DeleteIcon from '@mui/icons-material/Delete'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { useAppDispatch, useAppSelector } from '_redux/hooks'
import { addItem, removeItem } from '_redux/slices/channelsSlice'
import DialogDelete from 'components/dialogDelete/DialogDelete'

export interface ItemSel {
  action: 'new' | 'delete'
  id?: string
}

export default function MenuChannels() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')

  const [submit, setSubmit] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const [itemSel, setItemSel] = useState<ItemSel>()

  const channels = useAppSelector((state) => state.channels)

  useEffect(() => {
    setShowModal(false)
    setName('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channels])

  useEffect(() => {
    validateForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  const validateForm = () => {
    const errorsForm: { [key: string]: string } = {}
    if (name === '') {
      errorsForm.name = 'Name is required.'
    }
    setErrors(errorsForm)
    setIsFormValid(Object.keys(errorsForm).length === 0)
  }

  const validFieldForm = (nameField: string) => {
    if (
      !isFormValid &&
      submit &&
      errors[nameField] !== undefined &&
      errors[nameField] !== ''
    ) {
      return errors[nameField]
    } else {
      return ''
    }
  }

  const modal = () => {
    return (
      <>
        {itemSel?.action === 'delete' ? (
          <DialogDelete
            description={`Channel: ${itemSel.id ?? ''}`}
            showModal={showModal}
            onActionHide={() => {
              setShowModal(false)
            }}
            onActionDelete={() => {
              itemSel.id !== undefined && dispatch(removeItem(itemSel.id))
            }}
          />
        ) : (
          <Dialog
            open={showModal}
            maxWidth={'sm'}
            fullWidth={true}
            onClose={() => setShowModal(false)}
          >
            <DialogTitle>
              {itemSel?.action === 'new' ? 'Add' : 'Edit'} Channel
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
                error={validFieldForm('name') !== ''}
                helperText={validFieldForm('name')}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowModal(false)}>Cancel</Button>
              <Button
                variant="contained"
                onClick={() => {
                  setSubmit(true)
                  if (isFormValid) {
                    dispatch(addItem(name))
                  }
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </>
    )
  }

  return (
    <>
      {modal()}
      {channels.result?.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton sx={{ px: 4 }}>
            <Box
              flex={1}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <ListItemText
                primary={'#' + item.name}
                onClick={() => {
                  navigate('test')
                }}
              />
              <DeleteIcon
                fontSize="small"
                onClick={() => {
                  setShowModal(true)
                  setItemSel({
                    action: 'delete',
                    id: item.id
                  })
                }}
              />
            </Box>
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem
        disablePadding
        onClick={() => {
          setShowModal(true)
          setItemSel({
            action: 'new'
          })
        }}
      >
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon sx={{ minWidth: '40px', color: 'white' }}>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary={'Add channel'} />
        </ListItemButton>
      </ListItem>
    </>
  )
}
