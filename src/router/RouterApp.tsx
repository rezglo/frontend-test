import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { privateRoutes } from './private'
import { publicRoutes } from './public'
import { RootBoundary } from '../components/RootBoundary'
import { RootLayout } from '../layouts/root/Root'
import { useAuth } from '../hooks/useAuth'

export const RouterApp = () => {
  const { waitAuthCheck, isLogin } = useAuth()
  const routes = isLogin ? privateRoutes : publicRoutes

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <RootBoundary />,
      children: [...routes],
    },
  ])

  if (waitAuthCheck) return <Loading />

  return <RouterProvider router={router} fallbackElement={<Loading />} />
}
