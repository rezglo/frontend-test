import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { type ReactElement } from 'react'
import { useChannelStore } from '../../store/channels'
import { type UUID } from '../../store/types'
import { useNavigate } from 'react-router-dom'

interface Props {
  icon: ReactElement
  label: string
  id: UUID
}

function DropDownListItem ({ icon, label, id }: Props) {
  const selectChannel = useChannelStore(state => state.selectChannel)
  const navigate = useNavigate()

  const handleClick = () => {
    selectChannel(id)
    navigate(`/channels/${id}`)
  }

  return (
    <ListItemButton
      sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
      onClick={handleClick}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
      />
    </ListItemButton>
  )
}

export default DropDownListItem
