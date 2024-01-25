import { layoutRoutes } from './layoutRoutes'
import { Navigate } from 'react-router-dom'

export default function publicRoutes() {
  return [
    layoutRoutes,
    { path: '*', element: <Navigate to="/not-found" replace /> }
  ]
}
