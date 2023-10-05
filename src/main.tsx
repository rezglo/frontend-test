import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppThemeProvider } from './theme'
import { NotificationProvider } from './components/Notification'
import { RouterApp } from './router'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotificationProvider />
    <AppThemeProvider>
      <RouterApp />
    </AppThemeProvider>
  </React.StrictMode>,
)
