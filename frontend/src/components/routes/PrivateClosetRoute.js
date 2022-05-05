import React from 'react'
import { Navigate } from 'react-router-dom'
import ClosetContainer from '../../containers/closetContainer';

function PrivateClosetRoute() {
    const auth = localStorage.getItem('jwt');
    return auth ? <ClosetContainer /> : <Navigate to="/" />;
}

export default PrivateClosetRoute
