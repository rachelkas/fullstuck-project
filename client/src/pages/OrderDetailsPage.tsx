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




















// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchOrderById } from '../slices/orderSlice';
// import { RootState, AppDispatch } from '../store';
// import { OrderDetailsTableProps } from '../common/interfaces';
// import OrderDetailsTable from './OrderDetailsTable';


// const OrderDetailsPage: React.FC = () => {
//     const { orderId } = useParams<{ orderId: string }>();
//     const dispatch: AppDispatch = useDispatch();
//     const order = useSelector((state: RootState) => state.order.selectedOrder);

//     useEffect(() => {
//         if (orderId) {
//             dispatch(fetchOrderById(orderId));
//         }
//     }, [dispatch, orderId]);

//     if (!order) {
//         return <p>Loading order details...</p>;
//     }

//     const orderDetailsTableProps: OrderDetailsTableProps = {
//         selectedCartItems: order.items,
//         totalAmount: order.totalPrice
//     }

//     return (
//         <div className="order-details-page">
//             <h2>Order Details</h2>
//             <OrderDetailsTable {...orderDetailsTableProps} />
//         </div>
//     );
// };

// export default OrderDetailsPage;
































// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchOrderById } from '../slices/orderSlice';
// import { RootState, AppDispatch } from '../store';
// import { OrderDetailsTableProps } from '../common/interfaces';
// import OrderDetailsTable from './OrderDetailsTable';

// const OrderDetailsPage: React.FC = () => {
//     const { orderId } = useParams<{ orderId: string }>();
//     const dispatch: AppDispatch = useDispatch();
//     const order = useSelector((state: RootState) => state.order.selectedOrder);

//     useEffect(() => {
//         if (orderId) {
//             dispatch(fetchOrderById(orderId));
//         }
//     }, [dispatch, orderId]);

//     if (!order) {
//         return <p>Loading order details...</p>;
//     }

//     const orderDetailsTableProps: OrderDetailsTableProps = {
//         selectedCartItems: order.items,
//         totalAmount: order.totalPrice,
//     };

//     return (
//         <div className="order-details-page">
//             <h2>Order Details</h2>
//             <OrderDetailsTable {...orderDetailsTableProps} />
//         </div>
//     );
// };

// export default OrderDetailsPage;






























// // src/pages/OrderDetailsPage.tsx

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchOrderById } from '../slices/orderSlice';
// import { RootState, AppDispatch } from '../store';
// import { OrderDetailsTableProps } from '../common/interfaces';
// import OrderDetailsTable from './OrderDetailsTable';

// // OrderDetailsPage component to display the details of a specific order
// const OrderDetailsPage: React.FC = () => {
//     const { orderId } = useParams<{ orderId: string }>(); // Extract orderId from URL parameters
//     const dispatch: AppDispatch = useDispatch(); // Dispatch hook for triggering actions
//     const order = useSelector((state: RootState) => state.order.selectedOrder); // Get the selected order from Redux store

//     // Fetch order details when component mounts and when orderId changes
//     useEffect(() => {
//         if (orderId) {
//             dispatch(fetchOrderById(orderId)); // Dispatch fetchOrderById to load the order details
//         }
//     }, [dispatch, orderId]);

//     // If the order is not loaded yet, display a loading message
//     if (!order) {
//         return <p>Loading order details...</p>;
//     }

//     // Prepare the props for the OrderDetailsTable component
//     const orderDetailsTableProps: OrderDetailsTableProps = {
//         selectedCartItems: order.items, // Pass the order items to the table
//         totalAmount: order.totalPrice,  // Pass the total order amount
//         // pass the image URL of the product
//     };

//     return (
//         <div className="order-details-page">
//             <h2>Order Details</h2>
//             {/* Render the OrderDetailsTable with the relevant data */}
//             <OrderDetailsTable {...orderDetailsTableProps} />
//             <div>
//                 {/* <button onClick={() => history.push('/orders')}>Go back to Orders</button> */}
//                 <button onClick={() => navigate('/orders')}>Go back to Orders</button> {/* Replaced history.push */}

//             </div>
//         </div>



//     );
// };

// export default OrderDetailsPage;



































// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchOrderById } from '../slices/orderSlice';
// import { RootState, AppDispatch } from '../store';
// import { OrderDetailsTableProps } from '../common/interfaces';
// import OrderDetailsTable from './OrderDetailsTable';

// // OrderDetailsPage component to display the details of a specific order
// const OrderDetailsPage: React.FC = () => {
//     const { orderId } = useParams<{ orderId: string }>(); // Extract orderId from URL parameters
//     const dispatch: AppDispatch = useDispatch(); // Dispatch hook for triggering actions
//     const order = useSelector((state: RootState) => state.order.selectedOrder); // Get the selected order from Redux store
//     const navigate = useNavigate(); // Initialize navigate from react-router-dom

//     // Fetch order details when component mounts and when orderId changes
//     useEffect(() => {
//         if (orderId) {
//             dispatch(fetchOrderById(orderId)); // Dispatch fetchOrderById to load the order details
//         }
//     }, [dispatch, orderId]);

//     // If the order is not loaded yet, display a loading message
//     if (!order) {
//         return <p>Loading order details...</p>;
//     }

//     // Prepare the props for the OrderDetailsTable component
//     const orderDetailsTableProps: OrderDetailsTableProps = {
//         selectedCartItems: order.items, // Pass the order items to the table
//         totalAmount: order.totalPrice,  // Pass the total order amount
//         // pass the image URL of the product
//     };

//     return (
//         <div className="order-details-page">
//             <h2>Order Details</h2>
//             {/* Render the OrderDetailsTable with the relevant data */}
//             <OrderDetailsTable {...orderDetailsTableProps} />
//             <div>
//                 <button onClick={() => navigate('/orders')}>Go back to Orders</button> {/* Corrected usage of navigate */}
//             </div>
//         </div>
//     );
// };

// export default OrderDetailsPage;






























// src/pages/OrderDetailsPage.tsx

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderById } from '../slices/orderSlice';
import { RootState, AppDispatch } from '../store';
import { OrderDetailsTableProps } from '../common/interfaces';
import OrderDetailsTable from './OrderDetailsTable';

// OrderDetailsPage component to display the details of a specific order
const OrderDetailsPage: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>(); // Extract orderId from URL parameters
    const dispatch: AppDispatch = useDispatch(); // Dispatch hook for triggering actions
    const order = useSelector((state: RootState) => state.order.selectedOrder); // Get the selected order from Redux store
    const navigate = useNavigate(); // Initialize navigate from react-router-dom

    // Fetch order details when component mounts and when orderId changes
    useEffect(() => {
        if (orderId) {
            dispatch(fetchOrderById(orderId)); // Dispatch fetchOrderById to load the order details
        }
    }, [dispatch, orderId]);

    // If the order is not loaded yet, display a loading message
    if (!order) {
        return <p>Loading order details...</p>;
    }

    // Prepare the props for the OrderDetailsTable component
    const orderDetailsTableProps: OrderDetailsTableProps = {
        selectedCartItems: order.items, // Pass the order items to the table
        totalAmount: order.totalPrice,

    };

    return (
        <div className="order-details-page">
            <h2>Order Details</h2>
            {/* Render the OrderDetailsTable with the relevant data */}
            <OrderDetailsTable {...orderDetailsTableProps} />
            <div>
                <button onClick={() => navigate('/orders')}>Go back to Orders</button> {/* Corrected usage of navigate */}
            </div>
        </div>
    );
};

export default OrderDetailsPage;
