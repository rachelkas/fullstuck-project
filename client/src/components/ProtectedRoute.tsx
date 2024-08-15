// // src/components/ProtectedRoute.tsx

// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';

// interface ProtectedRouteProps {
//     element: React.ReactElement;
//     isAuthenticated: boolean;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isAuthenticated }) => {
//     return isAuthenticated ? element : <Navigate to="/log-in" />;
// };

// export default ProtectedRoute;






























// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// interface ProtectedRouteProps {
//     element: React.ReactElement;
//     isAuthenticated: boolean;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isAuthenticated }) => {
//     return isAuthenticated ? element : <Navigate to="/log-in" />;
// };

// export default ProtectedRoute;














// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// interface ProtectedRouteProps {
//     element: React.ReactElement;
//     isAuthenticated: boolean;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isAuthenticated }) => {
//     return isAuthenticated ? element : <Navigate to="/log-in" />;
// };

// export default ProtectedRoute;






































import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/log-in" />;
};

export default ProtectedRoute;
