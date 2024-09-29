import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { clearCart, createOrder } from '../slices/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './pages-style/orderSummaryPage.css';
import OrderDetailsTable from './OrderDetailsTable';
import { OrderDetailsTableProps } from '../common/interfaces';

const OrderSummaryPage: React.FC = () => {
    const location = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { selectedCartItems, totalAmount } = location.state || { selectedCartItems: [], totalAmount: 0 };

    const handleOrderSubmit = async () => {
        setLoading(true);
        try {
            console.log('Selected Cart Items:', selectedCartItems);
            const orderItems = selectedCartItems.map((item: any) => ({
                productId: item.productId._id,
                quantity: item.quantity,
                price: item.productId.price,
                image: item.productId.image,  // Include image here
            }));

            const orderResult = await dispatch(createOrder({ items: orderItems, totalPrice: totalAmount }));

            if (orderResult.meta.requestStatus === 'fulfilled') {
                dispatch(clearCart());
                Swal.fire({
                    icon: 'success',
                    title: 'Order Submitted!',
                    text: 'Your order has been successfully placed.',
                    confirmButtonText: 'Okay',
                }).then(() => {
                    navigate('/');
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Order Failed',
                    text: 'Something went wrong. Please try again later.',
                });
            }
        } catch (error) {
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

    const orderDetailsTableProps: OrderDetailsTableProps = {
        selectedCartItems: selectedCartItems.map((item: any) => ({
            // productId: item.productId._id,
            // quantity: item.quantity,
            // price: item.productId.price,
            ...item,
            image: item.productId.image,  // Include image here
        })),
        totalAmount,
    };
    console.log('selectedCartItems:', selectedCartItems);
    return (
        <div className="order-summary-page">
            <h2>Order Summary</h2>
            {selectedCartItems.length ? (
                <div>
                    <OrderDetailsTable {...orderDetailsTableProps} />
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
