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
import { OrderDetailsTableProps } from '../common/interfaces';
import OrderDetailsTable from './OrderDetailsTable';


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

    const orderDetailsTableProps: OrderDetailsTableProps = {
        selectedCartItems: order.items,
        totalAmount: order.totalPrice
    }

    return (
        <div className="order-details-page">
            <h2>Order Details</h2>
            <OrderDetailsTable {...orderDetailsTableProps} />
        </div>
    );
};

export default OrderDetailsPage;

