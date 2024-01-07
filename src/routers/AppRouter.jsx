import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../views/HomeScreen'
import { LoginScreen } from '../views/LoginScreen'
import PrivateRoutes from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {

  return (
    <BrowserRouter>
    
        <Routes>
            
            <Route path='/' element=
                {   
                    <PrivateRoutes>
                        <HomeScreen /> 
                    </PrivateRoutes> 
                } 
            />
            
            <Route path='/login' element=
                { 
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes> 
                } 
            />
            
            <Route path='/*' element={ <Navigate to='/' /> } />

        </Routes>
    
    </BrowserRouter>
  )
}
