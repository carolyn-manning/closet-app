import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import WelcomeContainer from '../../containers/welcomeContainer';
import CreateUser from '../welcome/createUser';

function CreateUserRoute() {
    const auth = !localStorage.getItem('jwt');
    return auth ? <CreateUser /> : <Navigate to="/my_closet" />;
}

export default CreateUserRoute;