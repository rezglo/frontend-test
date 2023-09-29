import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { useState, useRef, useEffect } from 'react'
import { Avatar } from '@mui/material'
import { useUserStore } from '../../store/users'
import { useNavigate } from 'react-router-dom'

export default function MenuListComposition () {
  const perfil = useUserStore(state => state.perfil)
  const logoutUser = useUserStore(state => state.logoutUser)
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      (anchorRef.current != null) &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }
    setOpen(false)
    if (event.target.title === 'logout') {
      logoutUser()
      navigate('/sign-in')
    }
    navigate('/')
  }

  function handleListKeyDown (event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current && !open) {
      if (anchorRef.current != null) {
        anchorRef.current.focus()
      }
    }

    prevOpen.current = open
  }, [open])

  return (
    <>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Avatar
          src={perfil?.photo}
          alt={perfil?.username}
          variant='rounded'
          sx={{ width: 24, height: 24, cursor: 'pointer', ':hover': { opacity: '0.8' } }}
        />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem title='home' onClick={handleClose}>Home</MenuItem>
                    <MenuItem title='profile' onClick={handleClose}>Profile</MenuItem>
                    <MenuItem title='logout' onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </>
  )
}
