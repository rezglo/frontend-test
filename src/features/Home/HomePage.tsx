import { Box, Typography } from '@mui/material'
import { useUserStore } from '../../store/users'
import logo from '../../assets/slack.svg'

function HomePage () {
  const perfil = useUserStore(state => state.perfil)
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, justifyContent: 'center', height: '100%' }}>
          <img src={logo} alt="slack logo" />
          <Typography variant='h4'color='#222'>Welcome @{perfil?.username} </Typography>
        </Box>
    </Box>
  )
}

export default HomePage
