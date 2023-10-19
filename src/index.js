import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import App from './App';
import Page404 from './containers/Page404';
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <Provider store={store}>
         <App />  
      </Provider>,
    children: [
      {
        path: '/channel',
        element: <h1>CHANNEL</h1>,
      },
      {
        path: '/users',
        element: <h1>USERS </h1>,
      },
    ], 
  },
  {
    path: '/*',
    element: <Page404 />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
