import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Authentication';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='text-2xl font-bold'>Loading....</div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;