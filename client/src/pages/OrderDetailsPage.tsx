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
