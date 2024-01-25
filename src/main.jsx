import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import RouterProvider from './router'
import { Provider } from 'react-redux'
import { store } from './store'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  </StrictMode>
)
