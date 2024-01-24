import App from '@/App'
import { homeRoutes } from './homeRoutes'
import { directMessagesRoutes } from './directMessagesRoutes'

export const appRoutes = {
  path: '/',
  element: <App />,
  children: [
    homeRoutes,
    directMessagesRoutes
  ]
}
