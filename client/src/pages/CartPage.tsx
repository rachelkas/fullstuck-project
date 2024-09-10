// // src/pages/CartPage.tsx

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems, removeFromCart, updateCartQuantity } from '../slices/userSlice';
// import './cartPage.css';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const navigate = useNavigate();

//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     const handleRemoveFromCart = (productId: string) => {
//         dispatch(removeFromCart(productId));
//     };

//     const handleQuantityChange = (productId: string, quantity: number) => {
//         if (quantity < 1) {
//             alert('Quantity cannot be less than 1');
//             return;
//         }
//         dispatch(updateCartQuantity({ productId, quantity }));
//     };

//     const goToOrderSummary = () => {
//         navigate('/order-summary');
//     };

//     return (
//         <div className="cart-page">
//             <h2>Cart Page</h2>
//             {cartItems.length ? (
//                 cartItems.map((item) => (
//                     <div key={item._id} className="cart-item">
//                         <img src={item.productId.image} alt={`${item.productId.productName} image`} />
//                         <p>{item.productId.productName}</p>
//                         <label>
//                             Quantity:
//                             <input
//                                 type="number"
//                                 value={item.quantity}
//                                 onChange={(e) => handleQuantityChange(item.productId._id, parseInt(e.target.value))}
//                             />
//                         </label>
//                         <p>Price: ${item.productId.price}</p>
//                         <button onClick={() => handleRemoveFromCart(item.productId._id)}>Remove</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>Your cart is empty</p>
//             )}
//             <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
//         </div>
//     );
// };

// export default CartPage;






























// src/pages/CartPage.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store';
import { fetchCartItems, removeFromCart, updateCartQuantity } from '../slices/userSlice';
import './cartPage.css';

const CartPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.user.cart);
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState<string[]>([]); // Track selected products
    const [totalAmount, setTotalAmount] = useState(0); // Track total amount

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    // Calculate total amount whenever selectedItems or cartItems change
    useEffect(() => {
        let total = 0;
        selectedItems.forEach(productId => {
            const cartItem = cartItems.find(item => item.productId._id === productId);
            if (cartItem) {
                total += cartItem.quantity * cartItem.productId.price;
            }
        });
        setTotalAmount(total);
    }, [selectedItems, cartItems]);

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

    const handleSelectItem = (productId: string) => {
        if (selectedItems.includes(productId)) {
            setSelectedItems(selectedItems.filter(id => id !== productId)); // Deselect item
        } else {
            setSelectedItems([...selectedItems, productId]); // Select item
        }
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
                        <input
                            type="checkbox"
                            checked={selectedItems.includes(item.productId._id)}
                            onChange={() => handleSelectItem(item.productId._id)}
                        />
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

            {/* Display total amount */}
            <div className="total-amount">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>

            <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
        </div>
    );
};

export default CartPage;
