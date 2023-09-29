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
import {
  addItem as addItemChannel,
  removeItem as removeItemChannel
} from '_redux/slices/channelsSlice'
import {
  addItem as addItemUser,
  removeItem as removeItemUser
} from '_redux/slices/usersSlice'
import DialogDelete from 'components/dialogDelete/DialogDelete'

interface ItemSel {
  action: 'new' | 'remove'
  id?: string
}

interface Props {
  type: 'channel' | 'user'
}

const SubMenu: React.FC<Props> = ({ type }) => {
  const label = type === 'channel' ? 'Channels' : 'Users'
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')

  const [submit, setSubmit] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const [itemSel, setItemSel] = useState<ItemSel>()

  const data = useAppSelector((state) =>
    type === 'channel' ? state.channels : state.users
  )

  useEffect(() => {
    setShowModal(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

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
    const nameDelete =
      itemSel?.id !== undefined &&
      data.result.find((item) => item.id === itemSel.id)?.name
    return (
      <>
        {itemSel?.action === 'remove' ? (
          <DialogDelete
            description={`${type}: ${String(nameDelete)}`}
            showModal={showModal}
            onActionHide={() => {
              setShowModal(false)
            }}
            onActionDelete={() => {
              itemSel.id !== undefined &&
                dispatch(
                  type === 'channel'
                    ? removeItemChannel(itemSel.id)
                    : removeItemUser(itemSel.id)
                )
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
              {itemSel?.action === 'new' ? 'Add' : 'Edit'} {label}
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
                    dispatch(
                      type === 'channel'
                        ? addItemChannel(name)
                        : addItemUser(name)
                    )
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
      {data.result?.map((item, index) => (
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
                primary={`${type === 'channel' ? '#' : ''}${item.name}`}
                onClick={() => {
                  navigate(
                    `${type === 'channel' ? 'channels' : 'persons'}/${item.id}`
                  )
                }}
              />
              <DeleteIcon
                fontSize="small"
                onClick={() => {
                  setShowModal(true)
                  setItemSel({
                    action: 'remove',
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
          setSubmit(false)
          setName('')
          setItemSel({
            action: 'new'
          })
        }}
      >
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon sx={{ minWidth: '40px', color: 'white' }}>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary={`Add ${label}`} />
        </ListItemButton>
      </ListItem>
    </>
  )
}
export default SubMenu
