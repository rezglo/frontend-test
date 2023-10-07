import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

export const ProtectedLayout = () => {
  const { isLogin, getAuthUser } = useAuth()

  useEffect(() => {
    getAuthUser()
  }, [getAuthUser])

  if (!isLogin) {
    return <Navigate to="/auth/login" replace={true} />
  }

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
