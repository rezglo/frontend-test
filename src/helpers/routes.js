import React from 'react';
import { Navigate } from 'react-router-dom';
import {LoginView} from '../views/auth/loginView';
import LoginLayout from '../layout/loginLayout';
//import Dashboard from '../layout/dashboardLayout';
//import { Home } from '../views/dashboard/Home';

const routes =(isLogging) => [
    {
      path: '/app',    
      //element: isLogging ? <Dashboard/>: <Navigate to="/login"/>,
      children: [ 
         //{ path: 'calendar', element: <CalendarView/> },    
       ]
    },
   {
      path: '/',
      element: !isLogging ? <LoginLayout /> : <Navigate to="/app"/>,
      children: [
        { path: '/login', element: <LoginView /> },       
  
      ]
    }
  ];
  
  export default routes;