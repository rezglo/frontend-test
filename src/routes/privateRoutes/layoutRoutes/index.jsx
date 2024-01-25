import Layout from '@/pages/Layout'
import { homeRoutes } from './homeRoutes'
import { directMessagesRoutes } from './directMessagesRoutes'

export const layoutRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    homeRoutes,
    directMessagesRoutes
  ]
}
