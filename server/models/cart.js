import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        quantity: { type: Number, default: 1}}],
    cartStatus: {
            type: String,
            enum: ['open', 'submitted'],
            default: 'open',
        },
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
