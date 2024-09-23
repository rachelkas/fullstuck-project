// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { AppDispatch, RootState } from '../store';
// import { fetchOrders } from '../slices/orderSlice';

// const OrdersPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const orders = useSelector((state: RootState) => state.order.orders);
//     const navigate = useNavigate();

//     useEffect(() => {
//         dispatch(fetchOrders());
//     }, [dispatch]);

//     const handleOrderClick = (orderId: string) => {
//         navigate(`/order-details/${orderId}`);
//     };

//     return (
//         <div>
//             <h2>Your Orders</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>Total</th>
//                         <th>Number of Items</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map((order) => (
//                         <tr key={order._id} onClick={() => handleOrderClick(order._id)}>
//                             <td>{order._id}</td>
//                             <td>${order.totalPrice.toFixed(2)}</td>
//                             <td>{order.items.length}</td>
//                             <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default OrdersPage;























































// src/pages/OrdersPage.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../store';
import { fetchOrders } from '../slices/orderSlice';

const OrdersPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.order.orders); // Access orders from Redux state
    const navigate = useNavigate();

    // Fetch orders on component mount
    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    // Navigate to the order details page when an order is clicked
    const handleOrderClick = (orderId: string) => {
        navigate(`/order-details/${orderId}`);
    };

    return (
        <div>
            <h2>Your Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Total</th>
                        <th>Number of Items</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through orders and display them in a table */}
                    {orders.map((order) => (
                        <tr key={order._id} onClick={() => handleOrderClick(order._id)}>
                            <td>{order._id}</td> {/* Display order ID */}
                            <td>${order.totalPrice.toFixed(2)}</td> {/* Display total price */}
                            <td>{order.items.length}</td> {/* Display number of items */}
                            <td>{new Date(order.createdAt).toLocaleDateString()}</td> {/* Display order date */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
