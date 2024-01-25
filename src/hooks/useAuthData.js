import { useMemo } from 'react'
import { useAppSelector } from './customReduxHooks'

export const useAuthData = () => {
  const { user, token } = useAppSelector((state) => state.authentication)
  return useMemo(() => ({ authUser: user, token }), [user, token])
}
