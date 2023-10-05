import { Navigate } from 'react-router-dom'

import { Channel } from '../features/channel'
import { Home } from '../features/home'
import { PrivateLayout } from '../layouts/private/Private'
import { DirectMessage } from '../features/directMessage/DirectMessage'

export const privateRoutes = [
  {
    path: '',
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'channel/:channelId',
        element: <Channel />,
      },
      {
        path: 'direct-message/:directMessageId',
        element: <DirectMessage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="" />,
  },
]
