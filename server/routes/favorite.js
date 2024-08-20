import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import Favorite from '../models/favorite.js';

const router = express.Router();

// Add product to favorites
router.post('/add', verifyToken, async (req, res) => {
    const { productId, userId } = req.body;
    try {
        let favoriteItem = await Favorite.findOne({ userId, productId });
        if (favoriteItem) {
            favoriteItem.quantity += 1;
            await favoriteItem.save();
        } else {
            favoriteItem = new Favorite({ userId, productId, quantity: 1 });
            await favoriteItem.save();
        }
        res.status(200).json({ message: 'Product added to favorite', favoriteItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

// Fetch all favorite items for a user
router.get('/', verifyToken, async (req, res) => {
    const userId = req.query.userId;
    try {
        const favoriteItems = await Favorite.find({ userId }).populate('productId');
        res.status(200).json(favoriteItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch favorite items' });
    }
});

// Remove a product from favorites
router.delete('/remove/:id', verifyToken, async (req, res) => {
    const userId = req.user.id;
    const productId = req.params.id;
    try {
        const favoriteItem = await Favorite.findOne({ userId, productId });
        if (favoriteItem) {
            await favoriteItem.remove();
            res.status(200).json({ message: 'Product removed from favorites' });
        } else {
            res.status(404).json({ message: 'Product not found in favorites' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to remove product from favorites' });
    }
});

export default router;

