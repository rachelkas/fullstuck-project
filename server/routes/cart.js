// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Cart from '../models/cart.js';

// const router = express.Router();

// // Add product to cart
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;
//     try {
//         let cartItem = await Cart.findOne({ userId, productId });
//         if (cartItem) {
//             cartItem.quantity += 1;
//             await cartItem.save();
//         } else {
//             cartItem = new Cart({ userId, productId, quantity: 1 });
//             await cartItem.save();
//         }
//         res.status(200).json({ message: 'Product added to cart', cartItem });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// // Fetch all cart items for a user
// router.get('/', verifyToken, async (req, res) => {
//     const userId = req.query.userId;
//     try {
//         const cartItems = await Cart.find({ userId }).populate('productId');
//         res.status(200).json(cartItems);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch cart items' });
//     }
// });

// // Remove an item from the cart
// router.delete('/remove/:productId', verifyToken, async (req, res) => {
//     const { productId } = req.params;
//     const userId = req.query.userId;

//     try {
//         const cartItem = await Cart.findOneAndDelete({ userId, productId });
//         if (!cartItem) {
//             return res.status(404).json({ message: 'Item not found in cart' });
//         }
//         res.status(200).json({ message: 'Item removed from cart' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Update quantity of an item in the cart
// router.put('/update/:productId', verifyToken, async (req, res) => {
//     const { productId } = req.params;
//     const { userId } = req.query;
//     const { quantity } = req.body;

//     try {
//         const cartItem = await Cart.findOneAndUpdate(
//             { userId, productId },
//             { $set: { quantity: quantity } },
//             { new: true }
//         );

//         if (!cartItem) {
//             return res.status(404).json({ message: 'Item not found in cart' });
//         }

//         res.json(cartItem);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to update quantity', error: error.message });
//     }
// });

// export default router;











































// routes/cart.js

// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Cart from '../models/cart.js';

// const router = express.Router();

// // Add product to cart
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;
//     try {
//         let cartItem = await Cart.findOne({ userId, productId });
//         if (cartItem) {
//             cartItem.quantity += 1;
//             await cartItem.save();
//         } else {
//             cartItem = new Cart({ userId, productId, quantity: 1 });
//             await cartItem.save();
//         }
//         res.status(200).json({ message: 'Product added to cart', cartItem });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// // Fetch all cart items for a user
// router.get('/', verifyToken, async (req, res) => {
//     const userId = req.query.userId;
//     try {
//         const cartItems = await Cart.find({ userId }).populate('productId');
//         const cartItemsWithImageUrl = cartItems.map(cartItem => ({
//             ...cartItem._doc,
//             productId: {
//                 ...cartItem.productId._doc,
//                 image: `http://localhost:3000${cartItem.productId.image}` // Adjust the URL
//             }
//         }));
//         res.status(200).json(cartItemsWithImageUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch cart items' });
//     }
// });

// // Remove an item from the cart
// router.delete('/remove/:productId', verifyToken, async (req, res) => {
//     const { productId } = req.params;
//     const userId = req.query.userId;

//     try {
//         const cartItem = await Cart.findOneAndDelete({ userId, productId });
//         if (!cartItem) {
//             return res.status(404).json({ message: 'Item not found in cart' });
//         }
//         res.status(200).json({ message: 'Item removed from cart' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Update quantity of an item in the cart
// router.put('/update/:productId', verifyToken, async (req, res) => {
//     const { productId } = req.params;
//     const { userId } = req.query;
//     const { quantity } = req.body;

//     try {
//         const cartItem = await Cart.findOneAndUpdate(
//             { userId, productId },
//             { $set: { quantity: quantity } },
//             { new: true }
//         );

//         if (!cartItem) {
//             return res.status(404).json({ message: 'Item not found in cart' });
//         }

//         res.json(cartItem);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to update quantity', error: error.message });
//     }
// });

// export default router;



















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
    const userId = req.user.id;  // Use req.user.id which is populated by verifyToken middleware
    if (!userId) {
        return res.status(400).json({ message: 'User ID is missing' });
    }

    try {
        const cartItems = await Cart.find({ userId }).populate('productId');
        const cartItemsWithImageUrl = cartItems.map(cartItem => ({
            ...cartItem._doc,
            productId: {
                ...cartItem.productId._doc,
                image: `http://localhost:3000${cartItem.productId.image}`  // Adjust the URL
            }
        }));
        res.status(200).json(cartItemsWithImageUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch cart items' });
    }
});

// Remove an item from the cart
router.delete('/remove/:productId', verifyToken, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.id;  // Use user id from the token

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

// Update quantity of an item in the cart
router.put('/update/:productId', verifyToken, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.id;  // Extract user ID from verified token
    const { quantity } = req.body;

    if (!userId || !productId) {
        return res.status(400).json({ message: 'User ID or Product ID is missing' });
    }

    try {
        const cartItem = await Cart.findOneAndUpdate(
            { userId, productId },
            { $set: { quantity } },
            { new: true }
        );

        if (!cartItem) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update quantity', error: error.message });
    }
});

export default router;
