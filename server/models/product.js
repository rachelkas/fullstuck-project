// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     description: { type: String, required: true },
//     image: { type: String }, // Assuming you might have an image for the product
// });

// const Product = mongoose.model('Product', productSchema);
// export default Product;




import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: {
        type: mongoose.Schema.Types.Mixed, // Allows mixed data types (object, string, etc.)
        required: true
    },
    price: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
