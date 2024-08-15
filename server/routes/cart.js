// import express from 'express';

// const router = express.Router();

// // Example route for getting cart items
// router.get('/', (req, res) => {
//     res.send('Get cart items');
// });

// // Example route for adding an item to the cart
// router.post('/', (req, res) => {
//     res.send('Add item to cart');
// });

// export default router;


























// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Cart from '../models/cart.js';

// const router = express.Router();

// // Add product to cart
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId } = req.body;
//     try {
//         const userId = req.user.id;
//         const cartItem = await Cart.findOne({ userId, productId });

//         if (cartItem) {
//             cartItem.quantity += 1;
//             await cartItem.save();
//         } else {
//             await Cart.create({ userId, productId, quantity: 1 });
//         }

//         res.status(200).json({ message: 'Product added to cart' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;


























// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// // import Cart from '../models/cart.js';
// import Cart from '../models/cart.js';

// const router = express.Router();

// // Add product to cart
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId } = req.body;

//     try {
//         const userId = req.user.id;
//         let cartItem = await Cart.findOne({ userId, productId });

//         if (cartItem) {
//             // If the item already exists in the cart, increment the quantity
//             cartItem.quantity += 1;
//             await cartItem.save();
//         } else {
//             // Otherwise, create a new cart item
//             cartItem = new Cart({ userId, productId, quantity: 1 });
//             await cartItem.save();
//         }

//         res.status(200).json({ message: 'Product added to cart', cartItem });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
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
//     const { productId } = req.body;
//     try {
//         const userId = req.user.id;
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
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;


































// // routes/cart.js
// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Cart from '../models/cart.js';

// const router = express.Router();

// // Add product to cart
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId } = req.body;
//     try {
//         const userId = req.user.id;
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
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Remove product from cart
// router.delete('/remove/:productId', verifyToken, async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const { productId } = req.params;

//         const cartItem = await Cart.findOneAndDelete({ userId, productId });
//         if (!cartItem) {
//             return res.status(404).json({ message: 'Product not found in cart' });
//         }

//         res.status(200).json({ message: 'Product removed from cart' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;



























































import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import Cart from '../models/cart.js';

const router = express.Router();

// Add product to cart
router.post('/add', verifyToken, async (req, res) => {
    const { productId } = req.body;
    try {
        const userId = req.user.id;
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
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
