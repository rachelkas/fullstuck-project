// import mongoose from 'mongoose';

// const favoriteSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     quantity: { type: Number, default: 1 },
// });

// const Favorite = mongoose.model('Favorite', favoriteSchema);
// export default Favorite;








































// src/models/favorite.js

// Importing mongoose to define the schema for the Favorite model
import mongoose from 'mongoose';

// Define the schema for the Favorite model.
// Each favorite is associated with a user (userId) and a product (productId).
// The quantity field allows tracking how many times a product is favorited.
const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Each favorite must belong to a user
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true // Each favorite must reference a valid product
    },
    quantity: {
        type: Number,
        default: 1 // Default quantity is 1 if not specified, representing a single favorite
    },
});

// Create and export the Favorite model using the favoriteSchema
const Favorite = mongoose.model('Favorite', favoriteSchema);
export default Favorite;









