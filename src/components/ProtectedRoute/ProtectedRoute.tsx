import { type ReactNode } from 'react'
import { useUserStore } from '../../store/users'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
  children?: ReactNode
}

function ProtectedRoute ({ children }: Props) {
  const authenticated = useUserStore(state => state.perfil)
  const location = useLocation()

  if (authenticated === undefined) {
    return <Navigate to='/sign-in' state={{ location }}/>
  }
  return children
}

export default ProtectedRoute
