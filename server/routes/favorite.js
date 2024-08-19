// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Favorite from '../models/favorite.js';

// const router = express.Router();

// // Add product to favorites
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;
//     try {
//         const favoriteItem = await Favorite.findOne({ userId, productId });
//         if (!favoriteItem) {
//             const newFavoriteItem = new Favorite({ userId, productId });
//             await newFavoriteItem.save();
//             res.status(200).json({ message: 'Product added to favorites', favoriteItem: newFavoriteItem });
//         } else {
//             res.status(400).json({ message: 'Product already in favorites' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;







import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import Favorite from '../models/favorite.js';

const router = express.Router();

// Add product to cart
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
        res.status(200).json({ message: 'Product added to Favorite', favoriteItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

export default router;
