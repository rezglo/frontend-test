import { AppThemeProvider } from '@/theme'
import { NotificationProvider } from '@/components/notification'
import { RouterApp } from '@/router'

export const App = () => {
  return (
    <>
      <NotificationProvider />
      <AppThemeProvider>
        <RouterApp />
      </AppThemeProvider>
    </>
  )
}
