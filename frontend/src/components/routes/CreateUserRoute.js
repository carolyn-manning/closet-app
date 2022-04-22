import React from 'react'
import { Navigate } from 'react-router-dom'
import CreateUser from '../welcome/createUser';

function CreateUserRoute() {
    const auth = !localStorage.getItem('jwt');
    return auth ? <CreateUser /> : <Navigate to="/my_closet" />;
}

export default CreateUserRoute;