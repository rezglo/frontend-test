import { createSlice } from '@reduxjs/toolkit'
import { decodeToken } from '@/utils/jwt/jwtUtils'

const initialState = { user: decodeToken(localStorage.getItem('token')), token: localStorage.getItem('token') || null }

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthData(state, action) {
      let token = null
      let user = null
      const { data, actionType} = action.payload

      switch (actionType) {
      case 'SET_TOKEN_FROM_STORAGE':
        user = decodeToken(localStorage.getItem('token')) || null
        token = user ? localStorage.getItem('token') : null
        break

      case 'SET_TOKEN_FROM_PAYLOAD':
        token = data.token
        user = data.user
        localStorage.setItem('token', token)
        break

      default:
        break
      }

      state.user = user
      state.token = token
    }
  }
})

export const { setAuthData } = authenticationSlice.actions
export default authenticationSlice.reducer
