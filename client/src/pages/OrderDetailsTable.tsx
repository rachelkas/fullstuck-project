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
//                             <p>{item.productId?.productName || 'Unknown Product'} - Quantity: {item.quantity}</p>
//                             <p>Price: ${item.productId?.price || 'N/A'}</p>
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

// export default OrderDetailsTable;
























// src/pages/OrderDetailsTable.tsx

// import React from 'react';
// import { OrderDetailsTableProps } from '../common/interfaces';
// import './OrderDetailsTable.css'; // Import the CSS file for styling the order details table

// // OrderDetailsTable component to display the list of ordered items and the total amount
// const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
//     const { selectedCartItems = [], totalAmount } = props; // Destructure props and set default value for selectedCartItems

//     return (
//         <div>
//             {selectedCartItems.length ? ( // Check if there are items to display
//                 <div>
//                     {/* Map through selectedCartItems and display each item */}
//                     {selectedCartItems.map((item: any) => (
//                         <div key={item._id} className="summary-item">

//                             <p>{item.productId?.productName || 'Unknown Product'} - Quantity: {item.quantity}</p> {/* Display product name and quantity */}
//                             <p>Price: ${item.productId?.price || 'N/A'}</p> {/* Display product price */}

//                             <div className="product-image">
//                                 <img src={item.productId?.image} alt={item.productId?.productName} /></div>
//                         </div>
//                     ))}
//                     {/* Display the total amount of the order */}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                 </div>
//             ) : (
//                 <p>No items to summarize</p> // Display a message if there are no items
//             )}
//         </div>
//     );
// }

// export default OrderDetailsTable;































// import React from 'react';
// import { OrderDetailsTableProps } from '../common/interfaces';
// import './OrderDetailsTable.css'; // Import the CSS file for styling the order details table

// // OrderDetailsTable component to display the list of ordered items and the total amount
// const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
//     const { selectedCartItems = [], totalAmount } = props; // Destructure props and set default value for selectedCartItems

//     return (
//         <div>
//             {selectedCartItems.length ? ( // Check if there are items to display
//                 <div>
//                     {/* Map through selectedCartItems and display each item */}
//                     {selectedCartItems.map((item: any) => (
//                         <div key={item._id} className="summary-item">
//                             <p>{item.productId?.productName || 'Unknown Product'} - Quantity: {item.quantity}</p> {/* Display product name and quantity */}
//                             <p>Price: ${item.productId?.price || 'N/A'}</p> {/* Display product price */}
//                             <div className="product-image">
//                                 <img src={item.productId?.image} alt={item.productId?.productName} />
//                             </div>
//                         </div>
//                     ))}
//                     {/* Display the total amount of the order */}
//                     <h3>Total: ${totalAmount.toFixed(2)}</h3>
//                 </div>
//             ) : (
//                 <p>No items to summarize</p> // Display a message if there are no items
//             )}
//         </div>
//     );
// }

// export default OrderDetailsTable;
























// src/pages/OrderDetailsTable.tsx

import React from 'react';
import { OrderDetailsTableProps } from '../common/interfaces';
import './OrderDetailsTable.css'; // Import the CSS file for styling the order details table

// OrderDetailsTable component to display the list of ordered items and the total amount
const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
    const { selectedCartItems = [], totalAmount } = props; // Destructure props and set default value for selectedCartItems

    return (
        <div>
            {selectedCartItems.length ? ( // Check if there are items to display
                <div>
                    {/* Map through selectedCartItems and display each item */}
                    {selectedCartItems.map((item: any) => (
                        <div key={item._id} className="summary-item">
                            <p>{item.productId?.productName || 'Unknown Product'} - Quantity: {item.quantity}</p> {/* Display product name and quantity */}
                            <p>Price: ${item.productId?.price || 'N/A'}</p> {/* Display product price */}
                            <div className="product-image">
                                <img
                                    src={item.productId?.image}
                                    alt={item.productId?.productName}
                                    className="small-product-image"
                                />
                            </div>
                        </div>
                    ))}
                    {/* Display the total amount of the order */}
                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                </div>
            ) : (
                <p>No items to summarize</p> // Display a message if there are no items
            )}
        </div>
    );
}

export default OrderDetailsTable;
