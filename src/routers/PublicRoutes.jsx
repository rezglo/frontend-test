import { Navigate } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';

export const PublicRoutes = ( {children} )=>{

    const { uid } = useSelector(state => state.auth)
    const isLoggedIn = (!!uid) ? true : false  

    // If the user is logged in, the router redirects us to HomeScreen, if not
    // it renders the Login screen
    return isLoggedIn
                ? <Navigate to={'/'} />
                : children
}