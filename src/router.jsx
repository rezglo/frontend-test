import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import { loginRoute, privateRoutes, publicRoutes } from './routes'
import { useAuthData } from '@/hooks/useAuthData'

function Router() {
  const { authUser, token }  = useAuthData()
  const isLoggedIn = authUser && token

  const router = createBrowserRouter([
    ...(isLoggedIn ? privateRoutes() : []),
    ...publicRoutes(),
    loginRoute(isLoggedIn)
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Router
