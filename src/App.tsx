import { Route, Routes } from 'react-router-dom'
import Page404 from './features/404/Page404'
import HomePage from './features/Home/HomePage'
import Login from './features/Login/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Layout from './components/Layout/Layout'
import Chat from './features/Chat/Chat'

function App () {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout>
                <HomePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/channels/:id'
          element={
          <ProtectedRoute>
            <Layout>
              <Chat />
            </Layout>
          </ProtectedRoute> }
        />
        <Route path='/sign-in' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
