import React from 'react';
import { Navigate } from 'react-router-dom';
import {LoginView} from '../views/auth/loginView';
import LoginLayout from '../layout/loginLayout';
import Dashboard from '../layout/dashboardLayout';
import { ChatView } from '../views/chat/chatView';

const routes =(isLogging) => [
    {
      path: '/app',    
      element: isLogging ? <Dashboard/>: <Navigate to="/login" replace/>,
      children: [ 
         { path: 'home', element: <ChatView/> },    
       ]
    },
   {
      path: '/',
      element: !isLogging ? <LoginLayout /> : <Navigate to="/app/home" replace/>,
      children: [
        { path: 'login', element: <LoginView /> },       
  
      ]
    }
  ];
  
  export default routes;