import { AccessTime, HelpOutlineOutlined, Search } from '@mui/icons-material'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import './Header.css'
import MenuListComposition from '../MenuList/MenuList'

function Header () {
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
        <MenuListComposition />
      </div>
    </header>
  )
}

export default Header
