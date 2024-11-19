import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;