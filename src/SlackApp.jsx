import React from 'react'
import { Provider } from 'react-redux'
import { LoginScreen } from './views/LoginScreen'
import { store } from './store/store'

export const SlackApp = () => {
  return (
    <Provider store={store}>
        <LoginScreen />
      </Provider>
    
  )
}
