import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return (
            <div className='flex flex-col items-center'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (!user) {
        return <Navigate state={{ from: location }} to='/login' replace={true}> </Navigate>
    }
    return children
};

export default PrivateRoute;