import { Avatar } from '@mui/material'
import { AccessTime, HelpOutlineOutlined, Search } from '@mui/icons-material'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import './Header.css'
import { useUserStore } from '../../store/users'

function Header () {
  const perfil = useUserStore(state => state.perfil)
  return (
    <header>
      <div className='header-left'>
        <AccessTime />
      </div>
      <div className='header-search-bar'>
        <input placeholder='Busca en Room' type='text' />
        <TuneRoundedIcon />
        <Search />
      </div>
      <div className='header-right'>
        <HelpOutlineOutlined />
        <Avatar src={perfil?.photo} alt={perfil?.username} variant='rounded' sx={{ width: 24, height: 24, cursor: 'pointer', ':hover': { opacity: '0.8' } }}/>
      </div>
    </header>
  )
}

export default Header
