import { create } from 'zustand'
import { type InputUser, type User } from './types'
import { getAllUsers } from '../utils/functions/getAllUsers'

interface State {
  users: User[]
  perfil?: User
  getUsers: () => Promise<void>
  signInUser: (input: InputUser) => void
  logoutUser: () => void
}

export const useUserStore = create<State>((set, get) => {
  return {
    users: [],
    perfil: undefined,

    getUsers: async () => {
      const initialUsers = await getAllUsers()
      set({
        users: initialUsers
      })
    },

    signInUser: (input: InputUser) => {
      const { users } = get()
      const { email, password } = input
      const indexUser = users.findIndex(user => user.email === email)
      if (indexUser === -1) {
        set({ })
        throw new Error('Email not valid')
      } else {
        const user = users[indexUser]
        if (user.password === password) set({ perfil: user })
        else throw new Error('Password not valid')
      }
    },
    logoutUser: () => {
      set({ perfil: undefined })
    }
  }
})
