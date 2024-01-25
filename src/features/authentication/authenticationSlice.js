import { createSlice } from '@reduxjs/toolkit'

const decodeToken = (token) => {
  return token
    ? {
      id: 1,
      firstName: 'Alvaro',
      lastName: 'Alonso',
      username: 'aalonso2024',
      email: 'alvaro.alonso@test.com',
      isOnline: true,
      imagePath: 'path/to/profile/image.png'
    }
    : null
}

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
        const tokenFromStorage = localStorage.getItem('token')
        user = decodeToken(tokenFromStorage) || null
        token = user ? tokenFromStorage : null
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
