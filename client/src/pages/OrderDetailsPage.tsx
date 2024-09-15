// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../store';
// import { fetchOrderById } from '../slices/orderSlice';

// const OrderDetailsPage: React.FC = () => {
//     const { orderId } = useParams<{ orderId: string }>();
//     const dispatch: AppDispatch = useDispatch();
//     const order = useSelector((state: RootState) => state.order.selectedOrder);

//     useEffect(() => {
//         if (orderId) {
//             dispatch(fetchOrderById(orderId)); // Dispatch action to fetch order details
//         }
//     }, [dispatch, orderId]);

//     if (!order) {
//         return <div>Loading...</div>; // Show loading or empty state
//     }

//     return (
//         <div>
//             <h2>Order Details</h2>
//             <p>Order ID: {order._id}</p>
//             <p>Total Price: ${order.totalPrice}</p>
//             <p>Ordered At: {new Date(order.createdAt).toLocaleDateString()}</p>
//             <h3>Items:</h3>
//             <ul>
//                 {order.items.map((item: any) => (
//                     <li key={item.productId._id}>
//                         {item.productId.productName} - Quantity: {item.quantity} - Price: ${item.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default OrderDetailsPage;




















import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderById } from '../slices/orderSlice';
import { RootState, AppDispatch } from '../store';


const OrderDetailsPage: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const dispatch: AppDispatch = useDispatch();
    const order = useSelector((state: RootState) => state.order.selectedOrder);

    useEffect(() => {
        if (orderId) {
            dispatch(fetchOrderById(orderId));
        }
    }, [dispatch, orderId]);

    if (!order) {
        return <p>Loading order details...</p>;
    }

    return (
        <div className="order-details-page">
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>

            <h3>Items in this Order:</h3>
            <ul>
                {order.items.map((item: any) => (
                    <li key={item.productId._id}>
                        <p>{item.productId.productName} - Quantity: {item.quantity} - Price: ${item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderDetailsPage;

