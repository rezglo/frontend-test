import { useLocation, useNavigate } from 'react-router-dom'

import { Layout, LoginForm } from './components'

export const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname ?? '/dashboard'

  return (
    <Layout>
      <LoginForm onSuccess={() => navigate(from, { replace: true })} />
    </Layout>
  )
}
