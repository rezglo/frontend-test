const KEY = 'token'

export const storage = {
  setToken: (data: string) => {
    window.localStorage.setItem(KEY, JSON.stringify(data))
    window.localStorage
  },
  getToken: () => {
    const user = window.localStorage.getItem(KEY)

    if (!user) return null
    return JSON.parse(user)
  },
  removeToken: () => {
    window.localStorage.removeItem(KEY)
  },
}
