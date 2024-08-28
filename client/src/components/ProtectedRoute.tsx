// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// interface ProtectedRouteProps {
//     element: React.ReactElement;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     return isAuthenticated ? element : <Navigate to="/log-in" />;
// };

// export default ProtectedRoute;































import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ProtectedRouteProps {
    element: React.ReactElement;
    adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, adminOnly = false }) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRole = useSelector((state: RootState) => state.user.userDetails.role);

    if (!isAuthenticated) {
        return <Navigate to="/log-in" />;
    }

    if (adminOnly && userRole !== 'admin') {
        return <Navigate to="/" />;
    }

    return element;
};

export default ProtectedRoute;
