// import React from 'react';
// import { OrderDetailsTableProps } from '../common/interfaces';

// const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {

//     const {selectedCartItems = [], totalAmount} = props;
//     return (
//         <div>
//             {selectedCartItems.length ? (
//                 <div>
//                     {selectedCartItems.map((item: any) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId.productName} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId.price}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                 </div>
//             ) : (
//                 <p>No items to summarize</p>
//             )}
//         </div>
//     );
// }

// export default OrderDetailsTable






























// import React from 'react';
// import { OrderDetailsTableProps } from '../common/interfaces';

// const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
//     const { selectedCartItems = [], totalAmount } = props;

//     return (
//         <div>
//             {selectedCartItems.length ? (
//                 <div>
//                     {selectedCartItems.map((item: any) => (
//                         <div key={item._id} className="summary-item">
//                             {/* Add safe check to ensure productId and productName exist */}
//                             <p>{item?.productId?.productName ? item.productId.productName : 'Unknown Product'} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item?.productId?.price ? item.productId.price : 'N/A'}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                 </div>
//             ) : (
//                 <p>No items to summarize</p>
//             )}
//         </div>
//     );
// };

// export default OrderDetailsTable;
































import React from 'react';
import { OrderDetailsTableProps } from '../common/interfaces';

const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
    const { selectedCartItems = [], totalAmount } = props;

    return (
        <div>
            {selectedCartItems.length ? (
                <div>
                    {selectedCartItems.map((item: any) => (
                        <div key={item._id} className="summary-item">
                            <p>{item.productId?.productName || 'Unknown Product'} - Quantity: {item.quantity}</p>
                            <p>Price: ${item.productId?.price || 'N/A'}</p>
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
