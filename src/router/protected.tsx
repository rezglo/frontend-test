import { Navigate } from 'react-router-dom'

import { Channel } from '@/features/channel'
import { Dashboard } from '@/features/dashboard'
import { ProtectedLayout } from '@/layouts/private/Protected'
import { DirectMessage } from '@/features/directMessage/DirectMessage'

export const protectedRoutes = [
  {
    path: '',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'channel/:channelId',
        element: <Channel />,
      },
      {
        path: 'direct-message/:directMessageId',
        element: <DirectMessage />,
      },
      {
        path: '*',
        element: <Navigate to="." />,
      },
    ],
  },
]
