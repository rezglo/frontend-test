import { RouterProvider } from 'react-router-dom'

import { Loading } from '@/components'
import { router } from './router'

export const RouterApp = () => {
  return <RouterProvider router={router} fallbackElement={<Loading />} />
}
