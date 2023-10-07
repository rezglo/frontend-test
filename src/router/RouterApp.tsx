import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Loading, ErrorBoundary } from '../components'
import { RootLayout } from '@/layouts/root/Root'
import { publicRoutes } from './public'
import { protectedRoutes } from './protected'

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [...protectedRoutes, ...publicRoutes],
  },
  {
    path: '*',
    element: <Navigate to="." />,
  },
])

export const RouterApp = () => {
  return <RouterProvider router={router} fallbackElement={<Loading />} />
}
