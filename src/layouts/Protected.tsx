import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header, Sidebar } from '@/components'
import { useUserStore } from '@/stores'

export const ProtectedLayout = () => {
  const isLogin = useUserStore((state) => state.isLogin)
  const location = useLocation()

  if (!isLogin) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return (
    <>
      <Header className="flex justify-between items-center px-6 text-white bg-slack w-full h-[3.5rem]" />
      <main className="h-[calc(100vh-3.5rem)] w-full grid grid-cols-[300px_1fr]">
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}
