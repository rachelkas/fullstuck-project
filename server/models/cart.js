// import mongoose from 'mongoose';

// const cartSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     items: [{
//         productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
//         quantity: { type: Number, default: 1}}],
//     cartStatus: {
//             type: String,
//             enum: ['open', 'submitted'],
//             default: 'open',
//         },
// });

// const Cart = mongoose.model('Cart', cartSchema);
// export default Cart;










































// src/models/cart.js

// Importing mongoose to define the schema for the Cart model
import mongoose from 'mongoose';

// Define the schema for Cart items. Each cart is associated with a user (userId),
// and it contains an array of items, where each item refers to a productId and has a quantity.
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Ensures that a cart always belongs to a user
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
                default: 1 // Default quantity is 1 if not specified
            }
        }
    ],
    cartStatus: {
        type: String,
        enum: ['open', 'submitted'], // Cart can either be 'open' or 'submitted'
        default: 'open', // By default, a cart is 'open' when items are added
    },
});

// Create and export the Cart model using the cartSchema
const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
