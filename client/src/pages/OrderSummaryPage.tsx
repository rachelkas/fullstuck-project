// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Updated import
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// const OrderSummaryPage: React.FC = () => {
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const navigate = useNavigate(); // Updated useHistory to useNavigate

//     const goBackToCart = () => {
//         navigate('/cart'); // Navigate back to the Cart page
//     };

//     return (
//         <div className="order-summary-page">
//             <h2>Order Summary</h2>
//             {cartItems.length ? (
//                 <div>
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <button onClick={goBackToCart}>Back to Cart</button> {/* Button to go back to cart */}
//                     {/* Add payment or confirmation buttons as needed */}
//                 </div>
//             ) : (
//                 <p>No items in the cart to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderSummaryPage;





















// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Updated import
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import './orderSummaryPage.css'; // Add styles for order summary

// const OrderSummaryPage: React.FC = () => {
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const navigate = useNavigate(); // Updated useHistory to useNavigate

//     // Calculate total amount
//     const totalAmount = cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);

//     const goBackToCart = () => {
//         navigate('/cart'); // Navigate back to the Cart page
//     };

//     const handleConfirmOrder = () => {
//         // Logic to confirm the order goes here
//         alert('Order Confirmed!'); // Replace with actual order confirmation logic
//     };

//     return (
//         <div className="order-summary-page">
//             <h2>Order Summary</h2>
//             {cartItems.length ? (
//                 <div>
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <div className="total-amount">
//                         <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//                     </div>
//                     <button onClick={goBackToCart}>Back to Cart</button>
//                     <button onClick={handleConfirmOrder} className="confirm-order-btn">Confirm Order</button>
//                 </div>
//             ) : (
//                 <p>No items in the cart to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderSummaryPage;
































// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState, AppDispatch } from '../store';
// import { clearCart } from '../slices/userSlice';
// import axios from '../utils/api';
// import './orderSummaryPage.css';


// const OrderSummaryPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const user = useSelector((state: RootState) => state.user.userDetails);
//     const navigate = useNavigate();

//     const totalPrice = cartItems.reduce(
//         (acc, item) => acc + item.productId.price * item.quantity,
//         0
//     );

//     const handleConfirmOrder = async () => {
//         try {
//             // Submit order to the backend
//             const orderData = {
//                 items: cartItems.map((item) => ({
//                     productId: item.productId._id,
//                     quantity: item.quantity,
//                 })),
//                 totalPrice,
//             };
//             await axios.post('/orders/create', orderData);

//             // Clear the cart after successful order submission
//             dispatch(clearCart());

//             // Navigate to the confirmation page
//             navigate('/order-confirmation');
//         } catch (error) {
//             console.error('Error submitting order:', error);
//             alert('Error submitting order');
//         }
//     };

//     const goBackToCart = () => {
//         navigate('/cart');
//     };

//     return (
//         <div className="order-summary-page">
//             <h2>Order Summary</h2>
//             {cartItems.length ? (
//                 <div>
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <p>Total: ${totalPrice}</p>
//                     <button onClick={goBackToCart}>Back to Cart</button>
//                     <button onClick={handleConfirmOrder}>Confirm Order</button>
//                 </div>
//             ) : (
//                 <p>No items in the cart to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderSummaryPage;


























// // src/pages/OrderSummaryPage.tsx

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { clearCart } from '../slices/userSlice'; // Assuming you have a clearCart action to empty the cart
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './orderSummaryPage.css';

// const OrderSummaryPage: React.FC = () => {
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const token = useSelector((state: RootState) => state.user.token); // Get the token from the store
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const totalAmount = cartItems.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

//     const handleOrderSubmit = async () => {
//         setLoading(true);

//         try {
//             const response = await axios.post(
//                 'http://localhost:3001/api/orders/create', // Adjust to your actual endpoint
//                 {
//                     items: cartItems,
//                     totalPrice: totalAmount
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`, // Include token in the Authorization header
//                     },
//                 }
//             );

//             if (response.status === 201) {
//                 alert('Order submitted successfully!');
//                 dispatch(clearCart()); // Clear the cart after successful order
//                 navigate('/order-confirmation'); // Navigate to a confirmation page (you'll need to create this)
//             }
//         } catch (error) {
//             console.error('Error submitting order:', error);
//             alert('Error submitting order');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const goBackToCart = () => {
//         navigate('/cart'); // Navigate back to the Cart page
//     };

//     return (
//         <div className="order-summary-page">
//             <h2>Order Summary</h2>
//             {cartItems.length ? (
//                 <div>
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                     <button onClick={goBackToCart}>Back to Cart</button>
//                     <button onClick={handleOrderSubmit} disabled={loading}>
//                         {loading ? 'Processing...' : 'Confirm Order'}
//                     </button>
//                 </div>
//             ) : (
//                 <p>No items in the cart to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderSummaryPage;

































// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../store';
// import { clearCart, createOrder } from '../slices/userSlice'; // Assuming you have a clearCart action to empty the cart
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './orderSummaryPage.css';

// const OrderSummaryPage: React.FC = () => {
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const token = useSelector((state: RootState) => state.user.token); // Get the token from the store
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const totalAmount = cartItems.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

//     const handleOrderSubmit = async () => {
//         setLoading(true);

//         try {

//             dispatch(createOrder());
//             navigate('/order-confirmation'); // Navigate to a confirmation page

//         } catch (error) {
//             console.error('Error submitting order:', error);
//             alert('Error submitting order');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const goBackToCart = () => {
//         navigate('/cart'); // Navigate back to the Cart page
//     };

//     return (
//         <div className="order-summary-page">
//             <h2>Order Summary</h2>
//             {cartItems.length ? (
//                 <div>
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                     <button onClick={goBackToCart}>Back to Cart</button>
//                     <button onClick={handleOrderSubmit} disabled={loading}>
//                         {loading ? 'Processing...' : 'Confirm Order'}
//                     </button>
//                 </div>
//             ) : (
//                 <p>No items in the cart to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderSummaryPage;

































// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../store';
// import { clearCart, createOrder } from '../slices/userSlice';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';  // Use sweetalert2 for a nice alert
// import './orderSummaryPage.css';

// const OrderSummaryPage: React.FC = () => {
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const token = useSelector((state: RootState) => state.user.token);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const totalAmount = cartItems.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

//     const handleOrderSubmit = async () => {
//         setLoading(true);

//         try {
//             // Dispatch the createOrder thunk to save the order in MongoDB
//             await dispatch(createOrder());

//             // Clear the cart after a successful order
//             dispatch(clearCart());

//             // Display a nice alert using SweetAlert2
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Order Submitted!',
//                 text: 'Your order has been successfully placed. We will process it soon.',
//                 confirmButtonText: 'Okay'
//             }).then(() => {
//                 // Navigate to the homepage after the user clicks "Okay"
//                 navigate('/');
//             });

//         } catch (error) {
//             console.error('Error submitting order:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Order Failed',
//                 text: 'Something went wrong. Please try again later.',
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const goBackToCart = () => {
//         navigate('/cart');
//     };

//     return (
//         <div className="order-summary-page">
//             <h2>Order Summary</h2>
//             {cartItems.length ? (
//                 <div>
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                     <button onClick={goBackToCart} disabled={loading}>Back to Cart</button>
//                     <button onClick={handleOrderSubmit} disabled={loading}>
//                         {loading ? 'Processing...' : 'Confirm Order'}
//                     </button>
//                 </div>
//             ) : (
//                 <p>No items in the cart to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderSummaryPage;






































// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../store';
// import { clearCart, createOrder } from '../slices/userSlice';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';  // Use sweetalert2 for a nice alert
// import './orderSummaryPage.css';

// const OrderSummaryPage: React.FC = () => {
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const token = useSelector((state: RootState) => state.user.token);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const totalAmount = cartItems.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

//     const handleOrderSubmit = async () => {
//         setLoading(true);
//         try {
//             // Dispatch the createOrder thunk to save the order in MongoDB
//             const orderResult = await dispatch(createOrder());

//             if (orderResult.meta.requestStatus === 'fulfilled') {
//                 // Check if the order is fulfilled successfully
//                 console.log('Order created successfully');

//                 // Clear the cart after a successful order
//                 dispatch(clearCart());

//                 // SweetAlert for a nice alert message
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Order Submitted!',
//                     text: 'Your order has been successfully placed. We will process it soon.',
//                     confirmButtonText: 'Okay'
//                 }).then(() => {
//                     // Navigate to the homepage after the user clicks "Okay"
//                     navigate('/');
//                 });
//             } else {
//                 // Handle case where order was not fulfilled
//                 console.error('Order creation failed:', orderResult);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Order Failed',
//                     text: 'Something went wrong. Please try again later.',
//                 });
//             }

//         } catch (error) {
//             console.error('Error submitting order:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Order Failed',
//                 text: 'Something went wrong. Please try again later.',
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const goBackToCart = () => {
//         navigate('/cart');
//     };

//     return (
//         <div className="order-summary-page">
//             <h2>Order Summary</h2>
//             {cartItems.length ? (
//                 <div>
//                     {cartItems.map((item) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                     <button onClick={goBackToCart} disabled={loading}>Back to Cart</button>
//                     <button onClick={handleOrderSubmit} disabled={loading}>
//                         {loading ? 'Processing...' : 'Confirm Order'}
//                     </button>
//                 </div>
//             ) : (
//                 <p>No items in the cart to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderSummaryPage;
































import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { clearCart, createOrder } from '../slices/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';  // Use sweetalert2 for a nice alert
import './orderSummaryPage.css';

const OrderSummaryPage: React.FC = () => {
    const location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Fetch the selected cart items and totalAmount from CartPage via location.state
    const { selectedCartItems, totalAmount } = location.state || { selectedCartItems: [], totalAmount: 0 };

    const handleOrderSubmit = async () => {
        setLoading(true);
        try {
            // Dispatch the createOrder thunk to save the order in MongoDB
            const orderResult = await dispatch(createOrder());

            if (orderResult.meta.requestStatus === 'fulfilled') {
                // Check if the order is fulfilled successfully
                console.log('Order created successfully');

                // Clear the cart after a successful order
                dispatch(clearCart());

                // SweetAlert for a nice alert message
                Swal.fire({
                    icon: 'success',
                    title: 'Order Submitted!',
                    text: 'Your order has been successfully placed. We will process it soon.',
                    confirmButtonText: 'Okay'
                }).then(() => {
                    // Navigate to the homepage after the user clicks "Okay"
                    navigate('/');
                });
            } else {
                // Handle case where order was not fulfilled
                console.error('Order creation failed:', orderResult);
                Swal.fire({
                    icon: 'error',
                    title: 'Order Failed',
                    text: 'Something went wrong. Please try again later.',
                });
            }

        } catch (error) {
            console.error('Error submitting order:', error);
            Swal.fire({
                icon: 'error',
                title: 'Order Failed',
                text: 'Something went wrong. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    const goBackToCart = () => {
        navigate('/cart');
    };

    return (
        <div className="order-summary-page">
            <h2>Order Summary</h2>
            {selectedCartItems.length ? (
                <div>
                    {selectedCartItems.map((item: any) => (
                        <div key={item._id} className="summary-item">
                            <p>{item.productId.productName} - Quantity: {item.quantity}</p>
                            <p>Price: ${item.productId.price}</p>
                        </div>
                    ))}
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    <button onClick={goBackToCart} disabled={loading}>Back to Cart</button>
                    <button onClick={handleOrderSubmit} disabled={loading}>
                        {loading ? 'Processing...' : 'Confirm Order'}
                    </button>
                </div>
            ) : (
                <p>No items to summarize</p>
            )}
        </div>
    );
};

export default OrderSummaryPage;
