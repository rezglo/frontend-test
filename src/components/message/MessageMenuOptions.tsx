import { Delete, PersonAddOutlined } from '@mui/icons-material'
import { ListItemIcon, ListItemText, MenuItem, Popover } from '@mui/material'

interface Props {
  elementRef: React.MutableRefObject<null>
  isShowMenu: boolean
  onClose: () => void
  onRemove: () => void
  onEdit: () => void
}

export const MessageMenuOptions: React.FC<Props> = ({
  elementRef,
  isShowMenu,
  onClose,
  onRemove,
  onEdit,
}) => {
  return (
    <Popover
      open={isShowMenu}
      anchorEl={elementRef.current}
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
