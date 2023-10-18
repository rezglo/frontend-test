const storagePrefix = 'react_'

export const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string)
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
  },
  removeToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`)
  },
}
