import { create } from 'zustand'

import { storage } from '@/utils/storage'
import { AuthUser } from '@/features/auth/login/types/index.d'
import { getAuthUser, login } from '@/features/auth/login/services/login'
import { LoginSchema } from '@/schemas'

interface State {
  isLogin: boolean
  authUser: null | AuthUser
  getAuthUser: () => void
  login: (data: LoginSchema) => void
  logout: () => void
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
}))
