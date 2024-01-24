import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import routes from './routes'

const { appRoutes, loginRoutes } = routes

const router = createBrowserRouter([
  loginRoutes, // - Login routes
  appRoutes // - Routes that using App component as layout
])

function Provider() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Provider
