// import express from 'express';

// const router = express.Router();

// // Example route for getting favorite items
// router.get('/', (req, res) => {
//     res.send('Get favorite items');
// });

// // Example route for adding an item to favorites
// router.post('/', (req, res) => {
//     res.send('Add item to favorites');
// });

// export default router;
































// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Favorite from '../models/favorite.js';

// const router = express.Router();

// // Add product to favorites
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId } = req.body;
//     try {
//         const userId = req.user.id;
//         const favoriteItem = await Favorite.findOne({ userId, productId });

//         if (!favoriteItem) {
//             await Favorite.create({ userId, productId });
//             res.status(200).json({ message: 'Product added to favorites' });
//         } else {
//             res.status(400).json({ message: 'Product already in favorites' });
//         }
//     } catch (error) {
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
//     const { productId } = req.body;
//     try {
//         const userId = req.user.id;
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




































// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Favorite from '../models/favorite.js';

// const router = express.Router();

// // Add product to favorites
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId } = req.body;
//     try {
//         const userId = req.user.id;
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

// // Remove product from favorites
// router.delete('/remove/:productId', verifyToken, async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const { productId } = req.params;

//         const favoriteItem = await Favorite.findOneAndDelete({ userId, productId });
//         if (!favoriteItem) {
//             return res.status(404).json({ message: 'Product not found in favorites' });
//         }

//         res.status(200).json({ message: 'Product removed from favorites' });
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

// Add product to favorites
router.post('/add', verifyToken, async (req, res) => {
    const { productId } = req.body;
    try {
        const userId = req.user.id;
        const favoriteItem = await Favorite.findOne({ userId, productId });
        if (!favoriteItem) {
            const newFavoriteItem = new Favorite({ userId, productId });
            await newFavoriteItem.save();
            res.status(200).json({ message: 'Product added to favorites', favoriteItem: newFavoriteItem });
        } else {
            res.status(400).json({ message: 'Product already in favorites' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
