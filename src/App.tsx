import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './App.css'
import DefaultLayout from 'layout/DefaultLayout'
import AuthLayout from 'layout/AuthLayout'

import SignIn from 'pages/signIn'
import Channels from 'pages/channels'
import { CssBaseline } from '@mui/material'

import { useAppSelector } from '_redux/hooks'
import Dashboard from 'pages/dashboard'

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

const App: React.FC = () => {
  const user = useAppSelector((state) => state.signIn.result)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<AuthLayout />}>
              <Route index element={<SignIn />} />
            </Route>
            {user.login && (
              <Route path="/slack" element={<DefaultLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="channels" element={<Channels />} />
              </Route>
            )}
            <Route
              path="*"
              element={
                <Navigate to={user.login ? '/slack' : '/sign-in'} replace />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
