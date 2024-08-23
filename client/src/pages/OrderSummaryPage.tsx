import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const OrderSummaryPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.user.cart);
    const navigate = useNavigate(); // Updated useHistory to useNavigate

    const goBackToCart = () => {
        navigate('/cart'); // Navigate back to the Cart page
    };

    return (
        <div className="order-summary-page">
            <h2>Order Summary</h2>
            {cartItems.length ? (
                <div>
                    {cartItems.map((item) => (
                        <div key={item._id} className="summary-item">
                            <p>{item.productId.productName} - Quantity: {item.quantity}</p>
                            <p>Price: ${item.productId.price}</p>
                        </div>
                    ))}
                    <button onClick={goBackToCart}>Back to Cart</button> {/* Button to go back to cart */}
                    {/* Add payment or confirmation buttons as needed */}
                </div>
            ) : (
                <p>No items in the cart to summarize</p>
            )}
        </div>
    );
};

export default OrderSummaryPage;
