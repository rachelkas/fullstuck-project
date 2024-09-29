import React from 'react';
import { OrderDetailsTableProps } from '../common/interfaces';
import './pages-style/OrderDetailsTable.css';

const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
    const { selectedCartItems = [], totalAmount } = props;
    console.log(selectedCartItems);
    return (
        <div>
            {selectedCartItems.length ? (
                <div>
                    {selectedCartItems.map((item: any) => (
                        <div key={item._id} className="summary-item">
                            <p>{item.productId?.productName || 'Unknown Product'} - Quantity: {item.quantity}</p>
                            <p>Price: ${item.productId?.price || 'N/A'}</p>
                            <div className="product-image">
                                <img
                                    src={item.image || 'default-image-url.png'}  // Ensure image is displayed correctly here
                                    alt={item.productId?.productName || 'Unknown Product'}
                                    className="small-product-image"
                                />
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                </div>
            ) : (
                <p>No items to summarize</p>
            )}
        </div>
    );
}

export default OrderDetailsTable;
