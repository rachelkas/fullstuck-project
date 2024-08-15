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
