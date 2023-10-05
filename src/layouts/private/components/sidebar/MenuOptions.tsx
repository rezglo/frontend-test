import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { InsertComment, AlternateEmail, MoreVert } from '@mui/icons-material'

const OPTIONS = [
  {
    link: '/options/thread',
    Icon: InsertComment,
    text: 'More',
  },
  {
    link: '/options/reactions',
    Icon: AlternateEmail,
    text: 'Mentions & Reactions',
  },
  {
    link: '/options/more',
    Icon: MoreVert,
    text: 'More',
  },
]
export const MenuOptions = () => {
  return (
    <List disablePadding className="opacity-60 ">
      {OPTIONS.map(({ link, Icon, text }) => (
        <ListItem key={link} className="group" disablePadding>
          <ListItemButton className="h-[36px]">
            <ListItemIcon className="text-xl justify-center mr-2 min-w-[24px] text-white relative">
              <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
