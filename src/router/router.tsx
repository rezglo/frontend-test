import { Navigate, createBrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from '@/components'
import { RootLayout } from '@/layouts'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      ...protectedRoutes,
      ...publicRoutes,
      {
        path: '*',
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
])
