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



















// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';
// import Cart from '../models/cart.js';

// const router = express.Router();

// // Add product to cart
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;
//     try {
//         let cartItem = await Cart.findOne({ userId, cartStatus: 'open' });
//         if (cartItem == null) {
//             cartItem = new Cart({ userId, items: [{productId}], cartStatus: 'open' });
//             await cartItem.save();
//         } else {
//             let selectedItem = cartItem.items.find(i => i.productId == productId);

//             if (selectedItem != null) {
//                 cartItem.items.find(i => i.productId == productId).quantity += 1;
//                 await cartItem.save();
//             } else {
//                 cartItem.items.addToSet({productId});
//                 await cartItem.save();
//             }
//         }

//         const cartData = await Cart.find({ userId, cartStatus: 'open' }).populate('items.productId');
//         if (cartData == null || cartData[0] == null)
//             return res.status(200).json([]);
//         const cartItemsWithImageUrl = cartData[0].items.map(cartItem => ({
//             ...cartItem._doc,
//             productId: {
//                 ...cartItem.productId._doc,
//                 image: `http://localhost:3000${cartItem.productId.image}`  // Adjust the URL
//             }
//         }));
//         const cart = {
//             cartId: cartData[0]._id,
//             items: [...cartItemsWithImageUrl]
//         };
//         res.status(200).json(cart);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });
//     }
// });

// // Fetch all cart items for a user
// router.get('/', verifyToken, async (req, res) => {
//     const userId = req.user.id;  // Use req.user.id which is populated by verifyToken middleware
//     if (!userId) {
//         return res.status(400).json({ message: 'User ID is missing' });
//     }

//     try {
//         const cartData = await Cart.find({ userId, cartStatus: 'open' }).populate('items.productId');
//         if (cartData == null || cartData[0] == null)
//             return res.status(200).json([]);
//         const cartItemsWithImageUrl = cartData[0].items.map(cartItem => ({
//             ...cartItem._doc,
//             productId: {
//                 ...cartItem.productId._doc,
//                 image: `http://localhost:3000${cartItem.productId.image}`  // Adjust the URL
//             }
//         }));
//         const cart = {
//             cartId: cartData[0]._id,
//             items: [...cartItemsWithImageUrl]
//         };
//         res.status(200).json(cart);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch cart items' });
//     }
// });

// // Remove an item from the cart
// router.delete('/remove/:productId', verifyToken, async (req, res) => {
//     const { productId } = req.params;
//     const userId = req.user.id;  // Use user id from the token

//     try {
//             const cartItem = await Cart.findOneAndUpdate({ userId, cartStatus: 'open', 'items.productId': productId }, {$pull: 
//             {
//               "items": {"productId": productId}
//             }
//           });
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
//     const userId = req.user.id;  // Extract user ID from verified token
//     const { quantity } = req.body;

//     if (!userId || !productId) {
//         return res.status(400).json({ message: 'User ID or Product ID is missing' });
//     }

//     try {
//         const cartItem = await Cart.findOneAndUpdate(
//             { userId, cartStatus: 'open', 'items.productId': productId },
//             { $set: { 'items.$.quantity': quantity  } },
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

















































// // src/routes/cart.js

// // Import required modules
// import express from 'express';
// import { verifyToken } from '../middleware/auth.js';  // Middleware for JWT authentication
// import Cart from '../models/cart.js';  // Import Cart model

// // Create a new router
// const router = express.Router();

// // Add product to cart route
// router.post('/add', verifyToken, async (req, res) => {
//     const { productId, userId } = req.body;  // Get productId and userId from the request body
//     try {
//         // Check if there is an open cart for the user
//         let cartItem = await Cart.findOne({ userId, cartStatus: 'open' });

//         if (cartItem == null) {
//             // If no open cart exists, create a new cart with the product
//             cartItem = new Cart({ userId, items: [{ productId }], cartStatus: 'open' });
//             await cartItem.save();
//         } else {
//             // Check if the product is already in the cart
//             let selectedItem = cartItem.items.find(i => i.productId == productId);

//             if (selectedItem != null) {
//                 // If the product exists, increment the quantity
//                 cartItem.items.find(i => i.productId == productId).quantity += 1;
//             } else {
//                 // If not, add the product to the cart
//                 cartItem.items.addToSet({ productId });
//             }
//             await cartItem.save();  // Save the cart after updating
//         }

//         // Fetch the updated cart and populate the product data
//         const cartData = await Cart.find({ userId, cartStatus: 'open' }).populate('items.productId');

//         if (cartData == null || cartData[0] == null) return res.status(200).json([]); // Return empty if no data

//         // Add image URL to the product data for frontend display
//         const cartItemsWithImageUrl = cartData[0].items.map(cartItem => ({
//             ...cartItem._doc,
//             productId: {
//                 ...cartItem.productId._doc,
//                 image: `http://localhost:3000${cartItem.productId.image}`  // Adjust image URL
//             }
//         }));

//         const cart = {
//             cartId: cartData[0]._id,
//             items: [...cartItemsWithImageUrl]
//         };

//         res.status(200).json(cart);  // Return updated cart with product details
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message });  // Handle errors
//     }
// });

// // Fetch all cart items for a user
// router.get('/', verifyToken, async (req, res) => {
//     const userId = req.user.id;  // Get user ID from token

//     if (!userId) {
//         return res.status(400).json({ message: 'User ID is missing' });  // Error if user ID is missing
//     }

//     try {
//         // Fetch the open cart for the user and populate product details
//         const cartData = await Cart.find({ userId, cartStatus: 'open' }).populate('items.productId');
//         if (cartData == null || cartData[0] == null) return res.status(200).json([]);

//         // Add image URL to the product data
//         const cartItemsWithImageUrl = cartData[0].items.map(cartItem => ({
//             ...cartItem._doc,
//             productId: {
//                 ...cartItem.productId._doc,
//                 image: `http://localhost:3000${cartItem.productId.image}`  // Adjust image URL
//             }
//         }));

//         const cart = {
//             cartId: cartData[0]._id,
//             items: [...cartItemsWithImageUrl]
//         };

//         res.status(200).json(cart);  // Return cart data
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to fetch cart items' });  // Handle errors
//     }
// });

// // Remove an item from the cart route
// router.delete('/remove/:productId', verifyToken, async (req, res) => {
//     const { productId } = req.params;  // Get productId from request parameters
//     const userId = req.user.id;  // Get user ID from token

//     try {
//         // Find and update the cart, removing the product from the items array
//         const cartItem = await Cart.findOneAndUpdate(
//             { userId, cartStatus: 'open', 'items.productId': productId },
//             { $pull: { "items": { "productId": productId } } }  // Pull product from items array
//         );

//         if (!cartItem) {
//             return res.status(404).json({ message: 'Item not found in cart' });  // Handle if item not found
//         }

//         res.status(200).json({ message: 'Item removed from cart' });  // Success message
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });  // Handle server errors
//     }
// });

// // Update quantity of an item in the cart route
// router.put('/update/:productId', verifyToken, async (req, res) => {
//     const { productId } = req.params;  // Get productId from request parameters
//     const userId = req.user.id;  // Get user ID from token
//     const { quantity } = req.body;  // Get the new quantity from the request body

//     if (!userId || !productId) {
//         return res.status(400).json({ message: 'User ID or Product ID is missing' });  // Handle missing data
//     }

//     try {
//         // Find and update the item quantity in the cart
//         const cartItem = await Cart.findOneAndUpdate(
//             { userId, cartStatus: 'open', 'items.productId': productId },
//             { $set: { 'items.$.quantity': quantity } },  // Update the quantity for the specified product
//             { new: true }  // Return the updated document
//         );

//         if (!cartItem) {
//             return res.status(404).json({ message: 'Item not found in cart' });  // Handle if item not found
//         }

//         res.json(cartItem);  // Return updated cart item
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to update quantity', error: error.message });  // Handle errors
//     }
// });

// // Export the router to be used in the application
// export default router;














































// src/routes/cart.js

import express from 'express';
import { verifyToken } from '../middleware/auth.js';  // Middleware for JWT authentication
import Cart from '../models/cart.js';  // Import Cart model

const router = express.Router();

// Add product to cart route
router.post('/add', verifyToken, async (req, res) => {
    const { productId, userId } = req.body;  // Get productId and userId from the request body
    try {
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
                image: `http://localhost:3000${cartItem.productId.image}`  // Adjust image URL
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
                image: `http://localhost:3000${cartItem.productId.image}`
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
