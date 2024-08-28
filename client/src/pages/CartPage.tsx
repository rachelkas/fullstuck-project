// src/pages/CartPage.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store';
import { fetchCartItems, removeFromCart, updateCartQuantity } from '../slices/userSlice';
import './cartPage.css';

const CartPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.user.cart);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const handleRemoveFromCart = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId: string, quantity: number) => {
        if (quantity < 1) {
            alert('Quantity cannot be less than 1');
            return;
        }
        dispatch(updateCartQuantity({ productId, quantity }));
    };

    const goToOrderSummary = () => {
        navigate('/order-summary');
    };

    return (
        <div className="cart-page">
            <h2>Cart Page</h2>
            {cartItems.length ? (
                cartItems.map((item) => (
                    <div key={item._id} className="cart-item">
                        <img src={item.productId.image} alt={`${item.productId.productName} image`} />
                        <p>{item.productId.productName}</p>
                        <label>
                            Quantity:
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.productId._id, parseInt(e.target.value))}
                            />
                        </label>
                        <p>Price: ${item.productId.price}</p>
                        <button onClick={() => handleRemoveFromCart(item.productId._id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
            <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
        </div>
    );
};

export default CartPage;
