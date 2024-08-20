import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import Cart from '../models/cart.js';

const router = express.Router();

// Add product to cart
router.post('/add', verifyToken, async (req, res) => {
    const { productId, userId } = req.body;
    try {
        let cartItem = await Cart.findOne({ userId, productId });
        if (cartItem) {
            cartItem.quantity += 1;
            await cartItem.save();
        } else {
            cartItem = new Cart({ userId, productId, quantity: 1 });
            await cartItem.save();
        }
        res.status(200).json({ message: 'Product added to cart', cartItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

// Fetch all cart items for a user
router.get('/', verifyToken, async (req, res) => {
    const userId = req.query.userId;
    try {
        const cartItems = await Cart.find({ userId }).populate('productId');
        res.status(200).json(cartItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch cart items' });
    }
});

// Remove an item from the cart
router.delete('/remove/:productId', verifyToken, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.id;
    try {
        const cartItem = await Cart.findOneAndDelete({ userId, productId });
        if (!cartItem) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;


