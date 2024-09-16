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





































import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="order-confirmation-page">
            <h2>Your order has been confirmed!</h2>
            <p>Thank you for shopping with us.</p>
            <button onClick={handleGoToProfile}>Go to Profile</button>
        </div>
    );
};

export default OrderConfirmationPage;
