import LoginPage from '@/pages/LoginPage'
import { Navigate } from 'react-router-dom'

export default function loginRoute(isLoggedIn) {
  return {
    path: '/login',
    element: !isLoggedIn ? <LoginPage /> : <Navigate to="/" />
  }
}
