import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start bg-[#f8f8f8]">
      <Outlet />
    </div>
  )
}
