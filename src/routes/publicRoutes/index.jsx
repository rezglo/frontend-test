import { Navigate } from 'react-router-dom'

export default function publicRoutes() {
  return [
    // - Add public routes here
    { path: '*', element: <Navigate to="/login" replace /> }
  ]
}
