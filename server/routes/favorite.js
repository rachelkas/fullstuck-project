// // routes/favorite.js
// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Favorite from '../models/favorite.js';

// const router = express.Router();

// // Add product to favorites
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;
//     try {
//         let favoriteItem = await Favorite.findOne({ userId, productId });
//         if (favoriteItem) {
//             favoriteItem.quantity += 1;
//             await favoriteItem.save();
//         } else {
//             favoriteItem = new Favorite({ userId, productId, quantity: 1 });
//             await favoriteItem.save();
//         }
//         res.status(200).json({ message: 'Product added to favorite', favoriteItem });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// // Fetch all favorite items for a user
// router.get('/', verifyToken, async (req, res) => {
//     const userId = req.query.userId;
//     try {
//         const favoriteItems = await Favorite.find({ userId }).populate('productId');
//         res.status(200).json(favoriteItems);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch favorite items' });
//     }
// });

// // Remove a product from favorites
// router.delete('/remove', verifyToken, async (req, res) => {
//     const userId = req.query.userId;
//     const productId = req.query.productId;

//     try {
//         const favoriteItem = await Favorite.findOneAndDelete({ userId, productId });
//         if (!favoriteItem) {
//             return res.status(404).json({ message: 'Item not found in favorites' });
//         }
//         res.status(200).json({ message: 'Item removed from favorites' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;
































// // routes/favorite.js
// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Favorite from '../models/favorite.js';

// const router = express.Router();

// // Add product to favorites
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;
//     try {
//         let favoriteItem = await Favorite.findOne({ userId, productId });
//         if (favoriteItem) {
//             favoriteItem.quantity += 1;
//             await favoriteItem.save();
//         } else {
//             favoriteItem = new Favorite({ userId, productId, quantity: 1 });
//             await favoriteItem.save();
//         }
//         res.status(200).json({ message: 'Product added to favorite', favoriteItem });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// // Fetch all favorite items for a user
// router.get('/', verifyToken, async (req, res) => {
//     const userId = req.query.userId;
//     try {
//         const favoriteItems = await Favorite.find({ userId }).populate('productId');
//         const favoritesWithImageUrl = favoriteItems.map(favorite => ({
//             ...favorite._doc,
//             productId: {
//                 ...favorite.productId._doc,
//                 image: `http://localhost:3000${favorite.productId.image}` // Adjust the URL
//             }
//         }));
//         res.status(200).json(favoritesWithImageUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch favorite items' });
//     }
// });

// // Remove a product from favorites
// router.delete('/remove', verifyToken, async (req, res) => {
//     const userId = req.query.userId;
//     const productId = req.query.productId;

//     try {
//         const favoriteItem = await Favorite.findOneAndDelete({ userId, productId });
//         if (!favoriteItem) {
//             return res.status(404).json({ message: 'Item not found in favorites' });
//         }
//         res.status(200).json({ message: 'Item removed from favorites' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;
































// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Favorite from '../models/favorite.js';

// const router = express.Router();

// // Add product to favorites
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;
//     try {
//         let favoriteItem = await Favorite.findOne({ userId, productId });
//         if (favoriteItem) {
//             favoriteItem.quantity += 1;
//             await favoriteItem.save();
//         } else {
//             favoriteItem = new Favorite({ userId, productId, quantity: 1 });
//             await favoriteItem.save();
//         }
//         res.status(200).json({ message: 'Product added to favorite', favoriteItem });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// // Fetch all favorite items for a user
// router.get('/', verifyToken, async (req, res) => {
//     const userId = req.user.id;  // Extract userId from the token
//     if (!userId) {
//         return res.status(400).json({ message: 'User ID is missing' });
//     }

//     try {
//         const favoriteItems = await Favorite.find({ userId }).populate('productId');
//         const favoritesWithImageUrl = favoriteItems.map(favorite => ({
//             ...favorite._doc,
//             productId: {
//                 ...favorite.productId._doc,
//                 image: `http://localhost:3000${favorite.productId.image}`  // Adjust the URL
//             }
//         }));
//         res.status(200).json(favoritesWithImageUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch favorite items' });
//     }
// });

// // Remove a product from favorites
// router.delete('/remove', verifyToken, async (req, res) => {
//     const userId = req.user.id;
//     const { productId } = req.query;

//     if (!userId || !productId) {
//         return res.status(400).json({ message: 'User ID or Product ID is missing' });
//     }

//     try {
//         const favoriteItem = await Favorite.findOneAndDelete({ userId, productId });
//         if (!favoriteItem) {
//             return res.status(404).json({ message: 'Item not found in favorites' });
//         }
//         res.status(200).json({ message: 'Item removed from favorites' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;























































// src/routes/favorite.js

import express from 'express';
import { verifyToken } from '../middleware/auth.js';  // Middleware to verify JWT tokens
import Favorite from '../models/favorite.js';  // Import Favorite model

const router = express.Router();

// Add product to favorites route
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
        const favoriteItems = await Favorite.find({ userId }).populate('productId');
        const favoritesWithImageUrl = favoriteItems.map(favorite => ({
            ...favorite._doc,
            productId: {
                ...favorite.productId._doc,
                image: `http://localhost:3000${favorite.productId.image}`
            }
        }));
        res.status(200).json(favoritesWithImageUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }


});

// Fetch all favorite items for a user
router.get('/', verifyToken, async (req, res) => {
    const userId = req.user.id;
    if (!userId) return res.status(400).json({ message: 'User ID is missing' });

    try {
        const favoriteItems = await Favorite.find({ userId }).populate('productId');
        const favoritesWithImageUrl = favoriteItems.map(favorite => ({
            ...favorite._doc,
            productId: {
                ...favorite.productId._doc,
                image: `http://localhost:3000${favorite.productId.image}`
            }
        }));
        res.status(200).json(favoritesWithImageUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch favorite items' });
    }
});

// Remove a product from favorites
router.delete('/remove', verifyToken, async (req, res) => {
    const userId = req.user.id;
    const { productId } = req.query;

    if (!userId || !productId) return res.status(400).json({ message: 'User ID or Product ID is missing' });

    try {
        const favoriteItem = await Favorite.findOneAndDelete({ userId, productId });
        if (!favoriteItem) return res.status(404).json({ message: 'Item not found in favorites' });
        const favoriteItems = await Favorite.find({ userId }).populate('productId');
        const favoritesWithImageUrl = favoriteItems.map(favorite => ({
            ...favorite._doc,
            productId: {
                ...favorite.productId._doc,
                image: `http://localhost:3000${favorite.productId.image}`
            }
        }));
        res.status(200).json(favoritesWithImageUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
