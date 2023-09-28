import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps
} from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import Typography from '@mui/material/Typography'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Colors from '_global/colors'

import { useAppDispatch, useAppSelector } from '_redux/hooks'
import { logout } from '_redux/slices/signInSlice'

const drawerWidth = 300

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open === true && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open === true && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

// eslint-disable react/prop-types
export default function DefaultLayout() {
  const theme = useTheme()

  const [open, setOpen] = useState(true)
  const [menuUser, setMenuUser] = useState<null | HTMLElement>(null)
  const openMenuUser = Boolean(menuUser)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.signIn.result)

  const handleDrawerOpen = (): void => {
    setOpen(!open)
  }

  const handleDrawerClose = (): void => {
    setOpen(false)
  }

  const ListItemIconStyle = { color: Colors.white }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: Colors.gray }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          {user.login && (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              sx={{ marginLeft: 'auto' }}
            >
              <PersonIcon fontSize="large" sx={{ mr: 1, color: 'grey.200' }} />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ marginBottom: 0, padding: 0 }}
                >
                  {user.name}
                </Typography>
                {user?.rol !== '' && (
                  <div style={{ marginTop: '-6px' }}>
                    <Typography
                      variant="caption"
                      sx={{ color: 'grey.500', textTransform: 'capitalize' }}
                    >
                      {user.rol}
                    </Typography>
                  </div>
                )}
              </Box>
              <IconButton
                color="inherit"
                id="basic-button"
                aria-controls={openMenuUser ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuUser ? 'true' : undefined}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  setMenuUser(event.currentTarget)
                }}
              >
                <MoreVertRoundedIcon fontSize="medium" />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={menuUser}
                open={openMenuUser}
                PaperProps={{
                  style: {
                    left: '50%',
                    transform: 'translateX(-6%) translateY(18%)',
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0
                  }
                }}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  style: {
                    padding: 0
                  }
                }}
                onClose={() => setMenuUser(null)}
              >
                <MenuItem onClick={() => setMenuUser(null)}>
                  My Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setMenuUser(null)
                    dispatch(logout())
                    navigate(`/sign-in`)
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        PaperProps={{
          sx: {
            backgroundColor: Colors.identityPrimary,
            color: 'white'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            onClick={() => {
              navigate('/')
            }}
            sx={
              {
                /*   backgroundColor:
                   route.path === '/' ? Colors.identityPrimary2 : undefined */
              }
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={ListItemIconStyle} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>

      <Main open={open}>
        <DrawerHeader />

        <Outlet />
      </Main>
    </Box>
  )
}
