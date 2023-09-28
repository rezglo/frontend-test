import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './App.css'
import DefaultLayout from 'layout/DefaultLayout'
import AuthLayout from 'layout/AuthLayout'

import SignIn from 'pages/signIn'
import Chanel from 'pages/chanel'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<AuthLayout />}>
              <Route index element={<SignIn />} />
            </Route>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Chanel />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <BrowserRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route path="*" element={<DefaultLayout />} />
            </Routes>
          </Suspense>
  </BrowserRouter> */}
      </ThemeProvider>
    </>
  )
}

export default App
