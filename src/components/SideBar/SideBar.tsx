import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded'
import FilterNoneRoundedIcon from '@mui/icons-material/FilterNoneRounded'
import LayersRoundedIcon from '@mui/icons-material/LayersRounded'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import { Create } from '@mui/icons-material'

import DropDownList from '../DropDownList/DropDownList'
import { useChannelStore } from '../../store/channels'
import { useUserStore } from '../../store/users'

const drawerWidth = 260

export default function ResponsiveDrawer () {
  const data = [
    { icon: <AlternateEmailRoundedIcon fontSize='small' style={{ color: '#eee' }} />, label: 'Menciones y Raeacciones' },
    { icon: <LayersRoundedIcon fontSize='small' style={{ color: '#eee' }}/>, label: 'Archivos' },
    { icon: <FilterNoneRoundedIcon fontSize='small' style={{ color: '#eee' }} />, label: 'Canvas' },
    { icon: <MoreVertRoundedIcon fontSize='small' style={{ color: '#eee' }} />, label: 'Mas' }
  ]
  const perfil = useUserStore(state => state.perfil)
  const users = useUserStore(state => state.users)
  const listOfUsers = users.filter(user => user.id !== perfil?.id)
  const channels = useChannelStore(state => state.channels)

  return (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#421f44', color: '#eaeaea' }
          }}
        >
          <div>
            <Toolbar sx={{ paddingTop: '72px', display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h5'>
                {perfil?.username}
              </Typography>
              <Create sx={{ padding: '8px', bgcolor: '#eee', color: '#421f44', borderRadius: '999px' }} />
            </Toolbar>
            <Divider />
            <List disablePadding sx={{ marginBlock: 2 }}>
              {data.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                  sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemIcon>
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <DropDownList title='Canales' list={channels} />
            <DropDownList title='Mensajes directos' list={listOfUsers}/>
          </div>
      </Drawer>
  )
}
