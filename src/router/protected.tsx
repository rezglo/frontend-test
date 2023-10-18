import { Navigate } from 'react-router-dom'

import { ProtectedLayout } from '@/layouts/Protected'

export const protectedRoutes = [
  {
    path: 'dashboard/*',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { Dashboard } = await import('@/features/dashboard/dashboard')
          return { Component: Dashboard }
        },
      },
      {
        path: 'channel/:channelId',
        lazy: async () => {
          const { Channel } = await import('@/features/dashboard/channel')
          return { Component: Channel }
        },
      },
      {
        path: 'direct-message/:directMessageId',
        lazy: async () => {
          const { DirectMessage } = await import('@/features/dashboard/directMessage')
          return { Component: DirectMessage }
        },
      },
      {
        path: '*',
        element: <Navigate to="." />,
      },
    ],
  },
]
