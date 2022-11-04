import React from 'react'
import { Navigate } from 'react-router-dom'
import WelcomeContainer from '../containers/welcomeContainer';

function LogInRoute() {
    const auth = !localStorage.getItem('jwt');
    return auth ? <WelcomeContainer /> : <Navigate to="/my_closet" />;
}


export default LogInRoute;