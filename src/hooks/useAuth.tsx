import { useCallback, useEffect, useState } from 'react'
import { useUserStore } from '../store'
import { storage } from '../lib/storage'

export const useAuth = () => {
  const [waitAuthCheck, setwaitAuthCheck] = useState(true)
  const [isLogin, autoLogin] = useUserStore((state) => [state.isLogin, state.autoLogin])

  const isAuthTokenValid = (token: string) => {
    return Boolean(token)
  }

  const handleAuth = useCallback(() => {
    const token = storage.getToken()

    if (isAuthTokenValid(token)) {
      autoLogin()
    }
  }, [autoLogin])

  useEffect(() => {
    handleAuth()
    setwaitAuthCheck(false)
  }, [handleAuth])

  return { waitAuthCheck, isLogin }
}
