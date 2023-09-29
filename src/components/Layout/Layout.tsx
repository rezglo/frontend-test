import { Box } from '@mui/material'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function Layout ({ children }: Props) {
  return (
    <section>
       <Box sx={{ display: 'flex' }}>
        <Header />
        <SideBar />
        {children}
       </Box>
    </section>
  )
}

export default Layout
