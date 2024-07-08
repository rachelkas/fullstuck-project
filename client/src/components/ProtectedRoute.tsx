import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth'; // Adjust the path as necessary

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    return isAuthenticated() ? <>{element}</> : <Navigate to="/log-in" />;
};

export default ProtectedRoute;