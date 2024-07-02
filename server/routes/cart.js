import express from 'express';
import User from '../models/User.js'; // Assuming your User model is defined in this file

const router = express.Router();

// Fetch user's cart items
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add an item to the user's cart
router.post('/:userId', async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Example: Add product to cart
        user.cart.push({ productId, quantity });
        await user.save();

        res.status(201).json(user.cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add more routes as needed for updating, deleting items from the cart, etc.

export default router;