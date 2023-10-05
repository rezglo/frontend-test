import { Navigate } from 'react-router-dom'

export const publicRoutes = [
  {
    path: '',
    lazy: async () => {
      const { Login } = await import('../features/login/Login')
      return { Component: Login }
    },
  },
  {
    path: '*',
    element: <Navigate to="" />,
  },
]
