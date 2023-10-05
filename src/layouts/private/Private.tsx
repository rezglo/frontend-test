import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useUserStore } from '../../store'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

export const PrivateLayout = () => {
  const getAuthUser = useUserStore((state) => state.getAuthUser)

  useEffect(() => {
    getAuthUser()
  }, [getAuthUser])

  return (
    <>
      <Header />
      <main className="h-full w-full grid grid-cols-[300px_1fr]">
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}
