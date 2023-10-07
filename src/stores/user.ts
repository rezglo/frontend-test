import { create } from 'zustand'

import { getAuthUser, login } from '@/services/user'
import { LoginSchema, AuthUser } from '@/types.d'
import { storage } from '@/utils/storage'

interface State {
  isLogin: boolean
  authUser: null | AuthUser
  getAuthUser: () => void
  login: (data: LoginSchema) => void
  logout: () => void
  autoLogin: () => void
}

export const useUserStore = create<State>((set) => ({
  isLogin: Boolean(storage.getToken()),
  authUser: null,
  getAuthUser: async () => {
    const authUser = await getAuthUser()

    if (!authUser) {
      storage.removeToken()
      set({ isLogin: false })
      return
    }

    set({ authUser })
  },
  login: async (data) => {
    const { token } = await login(data)
    storage.setToken(token)
    set({ isLogin: true })
  },
  logout: () => {
    storage.removeToken()
    set({ isLogin: false })
  },
  autoLogin: () => {
    set({ isLogin: true })
  },
}))
