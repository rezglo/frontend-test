import { useUserStore } from '../stores'

export const useAuth = () => {
  const [isLogin, getAuthUser, login] = useUserStore((state) => [
    state.isLogin,
    state.getAuthUser,
    state.login,
  ])

  return { isLogin, getAuthUser, login }
}
