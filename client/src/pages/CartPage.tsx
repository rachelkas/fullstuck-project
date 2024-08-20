import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchCartItems } from '../slices/userSlice';

const CartPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.user.cart);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    return (
        <div>
            <h2>Cart Page</h2>
            {cartItems.length ? (
                cartItems.map((item) => (

                    <div key={item._id}>
                        <img src={item.productId.image} alt={`${item.productId.productName} image`} />
                        <p>{item.productId.productName}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.productId.price}</p>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default CartPage;
