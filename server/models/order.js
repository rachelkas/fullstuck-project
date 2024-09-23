// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     items: [
//         {
//             productId: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'Product',
//                 required: true,
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//             },
//             price: {
//                 type: Number,
//                 required: true,
//             },
//         },
//     ],
//     totalPrice: {
//         type: Number,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const Order = mongoose.model('Order', orderSchema);
// export default Order;




















// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     items: [
//         {
//             productId: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'Product',
//                 required: true,
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//             },
//             price: {
//                 type: Number,
//                 required: true,
//             },
//         },
//     ],
//     totalPrice: {
//         type: Number,
//         required: true,
//     },
// }, { timestamps: true }); // Automatically add `createdAt` and `updatedAt` fields

// const Order = mongoose.model('Order', orderSchema);
// export default Order;






































// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     cartId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Cart',
//         required: true,
//     },
//     items: [
//         {
//             productId: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'Product',
//                 required: true,
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//             },
//             price: {
//                 type: Number,
//                 required: true,
//             },
//         },
//     ],
//     totalPrice: {
//         type: Number,
//         required: true,
//     },
//     orderStatus: {
//         type: String,
//         enum: ['open', 'submitted'],
//         default: 'open',
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const Order = mongoose.model('Order', orderSchema);
// export default Order;






































// src/models/order.js

// Importing mongoose to define the schema for the Order model
import mongoose from 'mongoose';

// Define the schema for the Order model.
// This schema captures details of each order placed by a user, including references to the user, cart, and product details.
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Each order is associated with a specific user
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true // Each order references a specific cart
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true // Each item must reference a valid product
            },
            quantity: {
                type: Number,
                required: true // The quantity of the product in the order
            },
            price: {
                type: Number,
                required: true // The price of the product at the time of the order
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true // The total price of the order (sum of all item prices)
    },
    orderStatus: {
        type: String,
        enum: ['open', 'submitted'],
        default: 'open' // The status of the order, defaults to 'open'
    },
    createdAt: {
        type: Date,
        default: Date.now // Timestamp for when the order was created
    },
});

// Create and export the Order model using the orderSchema
const Order = mongoose.model('Order', orderSchema);
export default Order;
