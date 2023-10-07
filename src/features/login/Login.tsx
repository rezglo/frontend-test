import { useNavigate } from 'react-router-dom'

import { Layout, LoginForm } from './components'
export const Login = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <LoginForm onSuccess={() => navigate('/', { replace: true })} />
    </Layout>
  )
}
