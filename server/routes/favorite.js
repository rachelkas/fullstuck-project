import express from 'express';
import Favorite from '../models/Favorite.js'; // Assuming your Favorite model is defined in this file

const router = express.Router();

// Fetch user's favorite products
router.get('/:userId', async (req, res) => {
    try {
        const favorites = await Favorite.find({ userId: req.params.userId }).populate('productId');
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a product to user's favorites
router.post('/:userId', async (req, res) => {
    const { productId } = req.body;

    try {
        const newFavorite = new Favorite({
            userId: req.params.userId,
            productId
        });

        await newFavorite.save();
        res.status(201).json(newFavorite);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add more routes as needed for updating, deleting favorites, etc.

export default router;