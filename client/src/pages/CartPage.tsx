// // src/pages/CartPage.tsx

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems } from '../slices/userSlice';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     const cartItems = useSelector((state: RootState) => state.user.cart);

//     return (
//         <div>
//             <h2>Cart Page</h2>
//             {cartItems.length ? (
//                 cartItems.map((item) => (
//                     <div key={item._id}>
//                         <p>{item.productName}</p>
//                         <p>{item.price}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>Your cart is empty</p>
//             )}
//         </div>
//     );
// }

// export default CartPage;


























// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems, removeFromCart } from '../slices/userSlice';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);

//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     const handleRemoveFromCart = (productId: string) => {
//         dispatch(removeFromCart(productId));
//     };

//     return (
//         <div>
//             <h2>Cart Page</h2>
//             {cartItems.length ? (
//                 cartItems.map((item) => (
//                     <div key={item._id}>
//                         <p>{item.productName}</p>
//                         <p>{item.price}</p>
//                         <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>Your cart is empty</p>
//             )}
//         </div>
//     );
// };

// export default CartPage;













































import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchCartItems } from '../slices/userSlice';


const CartPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const cartItems = useSelector((state: RootState) => state.user.cart);

    return (
        <div>
            <h2>Cart Page</h2>
            {cartItems.length ? (
                cartItems.map((item) => (
                    <div key={item._id}>
                        <p>{item.productName}</p>
                        <p>{item.price}</p>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default CartPage;


































// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems } from '../slices/userSlice';
// import './cartPage.css';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);

//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     const handleRemoveFromCart = (productId: string) => {
//         // Logic to remove item from cart can go here
//         console.log(`Remove product with ID: ${productId}`);
//     };

//     return (
//         <div className="cart-page">
//             <h2>Your Cart</h2>
//             {cartItems.length > 0 ? (
//                 <div className="cart-items">
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="cart-item">
//                             <img src={item.productId.image} alt={item.productId.productName} />
//                             <div>
//                                 <h3>{item.productId.productName}</h3>
//                                 <p>Quantity: {item.quantity}</p>
//                                 <p>Price: ${item.productId.price}</p>
//                                 <button onClick={() => handleRemoveFromCart(item._id)}>
//                                     Remove
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>Your cart is empty</p>
//             )}
//         </div>
//     );
// };

// export default CartPage;
