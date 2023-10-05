import { Delete, PersonAddOutlined } from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem, Popover } from '@mui/material'

interface Props {
  floatMenuRef: HTMLButtonElement | null
  onClose: () => void
  onRemove: () => void
  onEdit: () => void
}

export const MenuOptions: React.FC<Props> = ({ floatMenuRef, onClose, onRemove, onEdit }) => {
  return (
    <Popover
      open={Boolean(floatMenuRef)}
      anchorEl={floatMenuRef}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <>
        <MenuItem role="button" onClick={onEdit}>
          <ListItemIcon className="min-w-40">
            <PersonAddOutlined />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <MenuItem role="button" onClick={onRemove}>
          <ListItemIcon className="min-w-40">
            <Delete />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </>
    </Popover>
  )
}
