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






























// // src/pages/CartPage.tsx

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems, removeFromCart, updateCartQuantity } from '../slices/userSlice';
// import './cartPage.css';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const navigate = useNavigate();
//     const [selectedItems, setSelectedItems] = useState<string[]>([]); // Track selected products
//     const [totalAmount, setTotalAmount] = useState(0); // Track total amount

//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     // Calculate total amount whenever selectedItems or cartItems change
//     useEffect(() => {
//         let total = 0;
//         selectedItems.forEach(productId => {
//             const cartItem = cartItems.find(item => item.productId._id === productId);
//             if (cartItem) {
//                 total += cartItem.quantity * cartItem.productId.price;
//             }
//         });
//         setTotalAmount(total);
//     }, [selectedItems, cartItems]);

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

//     const handleSelectItem = (productId: string) => {
//         if (selectedItems.includes(productId)) {
//             setSelectedItems(selectedItems.filter(id => id !== productId)); // Deselect item
//         } else {
//             setSelectedItems([...selectedItems, productId]); // Select item
//         }
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
//                         <input
//                             type="checkbox"
//                             checked={selectedItems.includes(item.productId._id)}
//                             onChange={() => handleSelectItem(item.productId._id)}
//                         />
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

//             {/* Display total amount */}
//             <div className="total-amount">
//                 <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//             </div>

//             <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
//         </div>
//     );
// };

// export default CartPage;














































// src/pages/CartPage.tsx

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems, removeFromCart, updateCartQuantity } from '../slices/userSlice';
// import './cartPage.css';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const navigate = useNavigate();
//     const [selectedItems, setSelectedItems] = useState<string[]>([]); // Track selected products
//     const [totalAmount, setTotalAmount] = useState(0); // Track total amount

//     // Fetch cart items when the component mounts
//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     // Initialize selectedItems with all product IDs when cartItems are loaded
//     useEffect(() => {
//         const allProductIds = cartItems.map(item => item.productId._id);
//         setSelectedItems(allProductIds); // Select all items by default
//     }, [cartItems]);

//     // Calculate total amount whenever selectedItems or cartItems change
//     useEffect(() => {
//         let total = 0;
//         selectedItems.forEach(productId => {
//             const cartItem = cartItems.find(item => item.productId._id === productId);
//             if (cartItem) {
//                 total += cartItem.quantity * cartItem.productId.price;
//             }
//         });
//         setTotalAmount(total);
//     }, [selectedItems, cartItems]);

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

//     const handleSelectItem = (productId: string) => {
//         if (selectedItems.includes(productId)) {
//             setSelectedItems(selectedItems.filter(id => id !== productId)); // Deselect item
//         } else {
//             setSelectedItems([...selectedItems, productId]); // Select item
//         }
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
//                         <input
//                             type="checkbox"
//                             checked={selectedItems.includes(item.productId._id)} // Checkbox is checked if product is in selectedItems
//                             onChange={() => handleSelectItem(item.productId._id)} // Toggle selected state
//                         />
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

//             {/* Display total amount */}
//             <div className="total-amount">
//                 <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//             </div>

//             <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
//         </div>
//     );
// };

// export default CartPage;























































// src/pages/CartPage.tsx

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems, removeFromCart, updateCartQuantity } from '../slices/userSlice';
// import './cartPage.css';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const navigate = useNavigate();
//     const [selectedItems, setSelectedItems] = useState<string[]>([]); // Track selected products
//     const [totalAmount, setTotalAmount] = useState(0); // Track total amount

//     // Fetch cart items when the component mounts
//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     // Initialize selectedItems with all product IDs when cartItems are loaded
//     useEffect(() => {
//         const allProductIds = cartItems.map(item => item.productId._id);
//         setSelectedItems(allProductIds); // Select all items by default
//     }, [cartItems]);

//     // Calculate total amount whenever selectedItems or cartItems change
//     useEffect(() => {
//         let total = 0;
//         selectedItems.forEach(productId => {
//             const cartItem = cartItems.find(item => item.productId._id === productId);
//             if (cartItem) {
//                 total += cartItem.quantity * cartItem.productId.price;
//             }
//         });
//         setTotalAmount(total);
//     }, [selectedItems, cartItems]);

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

//     const handleSelectItem = (productId: string) => {
//         if (selectedItems.includes(productId)) {
//             setSelectedItems(selectedItems.filter(id => id !== productId)); // Deselect item
//         } else {
//             setSelectedItems([...selectedItems, productId]); // Select item
//         }
//     };

//     // Pass only selected items to the order summary page
//     const goToOrderSummary = () => {
//         const selectedCartItems = cartItems.filter(item => selectedItems.includes(item.productId._id));
//         navigate('/order-summary', { state: { selectedCartItems, totalAmount } });
//     };

//     return (
//         <div className="cart-page">
//             <h2>Cart Page</h2>
//             {cartItems.length ? (
//                 cartItems.map((item) => (
//                     <div key={item._id} className="cart-item">
//                         <input
//                             type="checkbox"
//                             checked={selectedItems.includes(item.productId._id)} // Checkbox is checked if product is in selectedItems
//                             onChange={() => handleSelectItem(item.productId._id)} // Toggle selected state
//                         />
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

//             {/* Display total amount */}
//             <div className="total-amount">
//                 <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//             </div>

//             <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
//         </div>
//     );
// };

// export default CartPage;










































































// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems, removeFromCart, updateCartQuantity, fetchLatestOrder } from '../slices/userSlice';
// import './cartPage.css';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart);
//     const latestOrder = useSelector((state: RootState) => state.user.latestOrder); // Add latest order state
//     const navigate = useNavigate();
//     const [selectedItems, setSelectedItems] = useState<string[]>([]); // Track selected products
//     const [totalAmount, setTotalAmount] = useState(0); // Track total amount

//     useEffect(() => {
//         dispatch(fetchCartItems());
//         dispatch(fetchLatestOrder()); // Fetch latest order to check status
//     }, [dispatch]);

//     useEffect(() => {
//         let total = 0;
//         selectedItems.forEach(productId => {
//             const cartItem = cartItems.find(item => item.productId._id === productId);
//             if (cartItem) {
//                 total += cartItem.quantity * cartItem.productId.price;
//             }
//         });
//         setTotalAmount(total);
//     }, [selectedItems, cartItems]);

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

//     const handleSelectItem = (productId: string) => {
//         if (selectedItems.includes(productId)) {
//             setSelectedItems(selectedItems.filter(id => id !== productId)); // Deselect item
//         } else {
//             setSelectedItems([...selectedItems, productId]); // Select item
//         }
//     };

//     const goToOrderSummary = () => {
//         // Check if the latest order is already submitted
//         if (latestOrder?.orderStatus === 'submitted') {
//             // Redirect user or clear the cart
//             setSelectedItems([]); // Clear selected items
//         } else {
//             navigate('/order-summary');
//         }
//     };

//     return (
//         <div className="cart-page">
//             <h2>Cart Page</h2>
//             {cartItems.length ? (
//                 cartItems.map((item) => (
//                     <div key={item._id} className="cart-item">
//                         <input
//                             type="checkbox"
//                             checked={selectedItems.includes(item.productId._id)}
//                             onChange={() => handleSelectItem(item.productId._id)}
//                         />
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

//             {/* Display total amount */}
//             <div className="total-amount">
//                 <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//             </div>

//             <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
//         </div>
//     );
// };

// export default CartPage;

































// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState, AppDispatch } from '../store';
// import { fetchCartItems, removeFromCart, updateCartQuantity, createOrder } from '../slices/userSlice';
// import './cartPage.css';

// const CartPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const cartItems = useSelector((state: RootState) => state.user.cart.items);
//     const navigate = useNavigate();
//     const [selectedItems, setSelectedItems] = useState<string[]>([]); // Track selected products
//     const [totalAmount, setTotalAmount] = useState(0); // Track total amount

//     useEffect(() => {
//         dispatch(fetchCartItems());
//     }, [dispatch]);

//     useEffect(() => {
//         let total = 0;
//         selectedItems.forEach(productId => {
//             const cartItem = cartItems.find(item => item.productId._id === productId);
//             if (cartItem) {
//                 total += cartItem.quantity * cartItem.productId.price;
//             }
//         });
//         setTotalAmount(total);
//     }, [selectedItems, cartItems]);

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

//     const handleSelectItem = (productId: string) => {
//         if (selectedItems.includes(productId)) {
//             setSelectedItems(selectedItems.filter(id => id !== productId)); // Deselect item
//         } else {
//             setSelectedItems([...selectedItems, productId]); // Select item
//         }
//     };

//     const goToOrderSummary = () => {
//         const selectedCartItems = cartItems?.filter(item => selectedItems.includes(item.productId._id)) || [];
//         navigate('/order-summary', { state: { selectedCartItems, totalAmount } });
//     };

//     return (
//         <div className="cart-page">
//             <h2>Cart Page</h2>
//             {cartItems?.length ? (
//                 cartItems.map((item) => (
//                     <div key={item._id} className="cart-item">
//                         <input
//                             type="checkbox"
//                             checked={selectedItems.includes(item.productId._id)}
//                             onChange={() => handleSelectItem(item.productId._id)}
//                         />
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

//             {/* Display total amount */}
//             <div className="total-amount">
//                 <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//             </div>

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
import { fetchCartItems, removeFromCart, updateCartQuantity } from '../slices/userSlice'; // Import cart-related actions
import './cartPage.css'; // Import custom CSS for cart page styling

const CartPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.user.cart.items); // Get cart items from Redux state
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState<string[]>([]); // State to track selected cart items
    const [totalAmount, setTotalAmount] = useState(0); // State to track total amount of selected items

    // Fetch cart items when the component loads
    useEffect(() => {
        dispatch(fetchCartItems()); // Fetch cart items from the server
    }, [dispatch]);

    // Calculate total amount whenever selected items or cart items change
    useEffect(() => {
        let total = 0;
        selectedItems.forEach(productId => {
            const cartItem = cartItems.find(item => item.productId._id === productId);
            if (cartItem) {
                total += cartItem.quantity * cartItem.productId.price; // Calculate total for selected items
            }
        });
        setTotalAmount(total); // Update total amount state
    }, [selectedItems, cartItems]);

    // Handle removing an item from the cart
    const handleRemoveFromCart = (productId: string) => {
        dispatch(removeFromCart(productId)); // Dispatch action to remove item from the cart
    };

    // Handle changing the quantity of an item in the cart
    const handleQuantityChange = (productId: string, quantity: number) => {
        if (quantity < 1) {
            alert('Quantity cannot be less than 1'); // Prevent negative or zero quantities
            return;
        }
        dispatch(updateCartQuantity({ productId, quantity })); // Dispatch action to update item quantity
    };

    // Handle selecting or deselecting an item from the cart
    const handleSelectItem = (productId: string) => {
        if (selectedItems.includes(productId)) {
            setSelectedItems(selectedItems.filter(id => id !== productId)); // Deselect item
        } else {
            setSelectedItems([...selectedItems, productId]); // Select item
        }
    };

    // Navigate to the Order Summary page, passing selected items and total amount as state
    const goToOrderSummary = () => {
        const selectedCartItems = cartItems?.filter(item => selectedItems.includes(item.productId._id)) || []; // Filter selected items
        navigate('/order-summary', { state: { selectedCartItems, totalAmount } }); // Navigate with state
    };

    return (
        <div className="cart-page">
            <h2>Cart Page</h2>
            {cartItems?.length ? (
                cartItems.map((item) => (
                    <div key={item._id} className="cart-item">
                        {/* Checkbox to select the item */}
                        <input
                            type="checkbox"
                            checked={selectedItems.includes(item.productId._id)} // Mark selected items
                            onChange={() => handleSelectItem(item.productId._id)} // Toggle selection
                        />
                        {/* Display product image */}
                        <img src={item.productId.image} alt={`${item.productId.productName} image`} />
                        <p>{item.productId.productName}</p>
                        {/* Input for changing item quantity */}
                        <label>
                            Quantity:
                            <input
                                type="number"
                                value={item.quantity} // Display current quantity
                                onChange={(e) => handleQuantityChange(item.productId._id, parseInt(e.target.value))} // Handle quantity change
                            />
                        </label>
                        <p>Price: ${item.productId.price}</p> {/* Display price */}
                        {/* Button to remove item from the cart */}
                        <button onClick={() => handleRemoveFromCart(item.productId._id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p> // Display message if no items in cart
            )}

            {/* Display total amount */}
            <div className="total-amount">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3> {/* Display total amount */}
            </div>

            {/* Button to proceed to the order summary page */}
            <button onClick={goToOrderSummary}>Proceed to Order Summary</button>
        </div>
    );
};

export default CartPage;
