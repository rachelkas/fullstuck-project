// src/routes/cart.js

import express from 'express';
import { verifyToken } from '../middleware/auth.js';  // Middleware for JWT authentication
import Cart from '../models/cart.js';  // Import Cart model

const router = express.Router();

// Add product to cart route
router.post('/add', verifyToken, async (req, res) => {
    const { productId, userId } = req.body;  // Get productId and userId from the request body
    try {
        if (!userId) {
            return res.status(500).json({ message: 'User ID is missing' });  // Error if user ID is missing    
        }
        let cartItem = await Cart.findOne({ userId, cartStatus: 'open' });
        if (!cartItem) {
            cartItem = new Cart({ userId, items: [{ productId }], cartStatus: 'open' });
            await cartItem.save();
        } else {
            let selectedItem = cartItem.items.find(i => i.productId == productId);
            if (selectedItem) {
                cartItem.items.find(i => i.productId == productId).quantity += 1;
            } else {
                cartItem.items.addToSet({ productId });
            }
            await cartItem.save();
        }

        const cartData = await Cart.find({ userId, cartStatus: 'open' }).populate('items.productId');
        if (!cartData || !cartData[0]) return res.status(200).json([]);

        const cartItemsWithImageUrl = cartData[0].items.map(cartItem => ({
            ...cartItem._doc,
            productId: {
                ...cartItem.productId._doc,
                image: `${process.env.BASE_URL}${cartItem.productId.image}`  // Adjust image URL
            }
        }));

        const cart = {
            cartId: cartData[0]._id,
            items: [...cartItemsWithImageUrl]
        };

        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

// Fetch all cart items for a user
router.get('/', verifyToken, async (req, res) => {
    const userId = req.user.id;
    if (!userId) return res.status(400).json({ message: 'User ID is missing' });

    try {
        const cartData = await Cart.find({ userId, cartStatus: 'open' }).populate('items.productId');
        if (!cartData || !cartData[0]) return res.status(200).json([]);

        const cartItemsWithImageUrl = cartData[0].items.map(cartItem => ({
            ...cartItem._doc,
            productId: {
                ...cartItem.productId._doc,
                image: `${process.env.BASE_URL}${cartItem.productId.image}`
            }
        }));

        const cart = {
            cartId: cartData[0]._id,
            items: [...cartItemsWithImageUrl]
        };

        res.status(200).json(cart);
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
        const cartItem = await Cart.findOneAndUpdate(
            { userId, cartStatus: 'open', 'items.productId': productId },
            { $pull: { "items": { "productId": productId } } }
        );
        if (!cartItem) return res.status(404).json({ message: 'Item not found in cart' });
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update quantity of an item in the cart
router.put('/update/:productId', verifyToken, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.id;
    const { quantity } = req.body;

    if (!userId || !productId) return res.status(400).json({ message: 'User ID or Product ID is missing' });

    try {
        const cartItem = await Cart.findOneAndUpdate(
            { userId, cartStatus: 'open', 'items.productId': productId },
            { $set: { 'items.$.quantity': quantity } },
            { new: true }
        );
        if (!cartItem) return res.status(404).json({ message: 'Item not found in cart' });
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update quantity', error: error.message });
    }
});

export default router;
