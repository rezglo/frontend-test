import { useState } from 'react'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Avatar, Box, ListItemIcon } from '@mui/material'
import { Add, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import TagIcon from '@mui/icons-material/Tag'

import DropDownListItem from '../DropDownListItem/DropDownListItem'
import { type User, type Channel } from '../../store/types'
import ChannelModal from '../Modal/Modal'

interface Props {
  title: string
  list: Channel[] | User[]
}

function checkIsCHannelList (list: Channel[] | User[]): list is Channel[] {
  return (list as Channel[])[0]?.name !== undefined ?? false
}

function DropDownList ({ title, list }: Props) {
  const [open, setOpen] = useState(false)

  const displayChannels = checkIsCHannelList(list)
  return (
    <Box
      sx={{
        bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
        pb: open ? 2 : 0
      }}
    >
      <ListItemButton
        alignItems="flex-start"
        onClick={() => { setOpen(!open) }}
        sx={{
          px: 3,
          pt: 1,
          pb: open ? 0 : 1

        }}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px'
          }}
          sx={{ my: 0 }}
        />
        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}

      </ListItemButton>
      {open && (
        <>
          {
            displayChannels
              ? (
                <ListItemButton
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      <Add fontSize='small' />
                    </ListItemIcon>
                    <ChannelModal />
                </ListItemButton>
                )
              : (
                <ListItemButton
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      <Add fontSize='small' />
                    </ListItemIcon>
                    Añadir compañeros
                </ListItemButton>
                )
          }
          {
            displayChannels
              ? list.map((item) => (
                <DropDownListItem key={item.id} icon={<TagIcon fontSize='small' />} label={item.name} id={item.id} />
              ))
              : list.map(item => (
                <DropDownListItem key={item.id} icon={<Avatar src={item.photo} alt={item.username} variant='rounded' sx={{ width: 24, height: 24 }}/>} label={item.username} id={item.id} />
              ))
          }
        </>

      )
      }
    </Box>
  )
}

export default DropDownList
