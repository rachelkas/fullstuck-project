// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     productName: { type: String, required: true },
//     image: { data: Buffer, required: true, type: String },
//     description: { type: String, required: true },
//     price: { type: Number, required: true }
// });

// const Product = mongoose.model('Product', productSchema);
// export default Product;





























// src/models/product.js

// Importing mongoose to define the schema for the Product model
import mongoose from 'mongoose';

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true // The name of the product, must be provided
    },
    image: {
        data: Buffer, // Image data (this can be a file buffer for storing the image)
        required: true,
        type: String // The image is stored as a string (typically, a URL or base64 encoded image)
    },
    description: {
        type: String,
        required: true // A detailed description of the product
    },
    price: {
        type: Number,
        required: true // The price of the product in a numerical format
    }
});

// Create and export the Product model using the productSchema
const Product = mongoose.model('Product', productSchema);
export default Product;























