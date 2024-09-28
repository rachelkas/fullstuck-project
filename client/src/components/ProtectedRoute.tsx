// src/components/ProtectedRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom'; // Redirects the user to a different route
import { useSelector } from 'react-redux'; // Access the Redux store to check authentication and user role
import { RootState } from '../store'; // Import the RootState interface from the store

interface ProtectedRouteProps {
    element: React.ReactElement; // The component to be rendered if the user is authorized
    adminOnly?: boolean; // Optional prop to restrict access to admin users only
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, adminOnly = false }) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated); // Get authentication status from Redux
    const userRole = useSelector((state: RootState) => state.user.userDetails.role); // Get the user role from Redux

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/log-in" />;
    }

    // If the route is admin-only but the user is not an admin, redirect to the home page
    if (adminOnly && userRole !== 'admin') {
        return <Navigate to="/" />;
    }

    // If the user is authenticated and (if required) an admin, render the passed component
    return element;
};

export default ProtectedRoute;
