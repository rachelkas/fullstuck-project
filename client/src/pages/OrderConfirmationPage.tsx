// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const OrderConfirmationPage: React.FC = () => {
//     const navigate = useNavigate();

//     const handleGoToProfile = () => {
//         navigate('/profile');
//     };

//     return (
//         <div className="order-confirmation-page">
//             <h2>Your order has been confirmed!</h2>
//             <p>Thank you for shopping with us.</p>
//             <button onClick={handleGoToProfile}>Go to Profile</button>
//         </div>
//     );
// };

// export default OrderConfirmationPage;





































// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const OrderConfirmationPage: React.FC = () => {
//     const navigate = useNavigate();

//     const handleGoToProfile = () => {
//         navigate('/profile');
//     };

//     return (
//         <div className="order-confirmation-page">
//             <h2>Your order has been confirmed!</h2>
//             <p>Thank you for shopping with us.</p>
//             <button onClick={handleGoToProfile}>Go to Profile</button>
//         </div>
//     );
// };

// export default OrderConfirmationPage;

























// src/pages/OrderConfirmationPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

// OrderConfirmationPage component for displaying confirmation after placing an order
const OrderConfirmationPage: React.FC = () => {
    const navigate = useNavigate(); // useNavigate hook to handle navigation

    // Function to navigate the user to their profile page after order confirmation
    const handleGoToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="order-confirmation-page">
            {/* Confirmation message */}
            <h2>Your order has been confirmed!</h2>
            <p>Thank you for shopping with us.</p>
            {/* Button to navigate to the profile page */}
            <button onClick={handleGoToProfile}>Go to Profile</button>
        </div>
    );
};

export default OrderConfirmationPage;
