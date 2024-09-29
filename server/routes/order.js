// src/routes/order.js

import express from 'express';
import { createOrder, getOrderById, getUserOrders, submitOrder } from '../controllers/orderController.js'; // Import order controller methods
import { verifyToken } from '../middleware/auth.js';  // Import the middleware to verify JWT tokens

const router = express.Router();

// Create a new order
// Protected route: Requires a valid token for the user to place an order
router.post('/create', verifyToken, async (req, res, next) => {
    try {
        await createOrder(req, res); // Call the createOrder controller
    } catch (error) {
        next(error); // Pass any errors to the global error handler
    }
});

// Submit an existing order by order ID
// Protected route: Allows the user to submit an order they have created
router.put('/submit/:orderId', verifyToken, async (req, res, next) => {
    try {
        await submitOrder(req, res); // Call the submitOrder controller
    } catch (error) {
        next(error); // Pass any errors to the global error handler
    }
});

// Get all orders for the logged-in user
// Protected route: Fetches all orders of the authenticated user
router.get('/', verifyToken, async (req, res, next) => {
    try {
        await getUserOrders(req, res); // Call the getUserOrders controller
    } catch (error) {
        next(error); // Pass any errors to the global error handler
    }
});

// Get details of a specific order by its ID
// Protected route: Returns the details of a specific order by its ID
router.get('/:orderId', verifyToken, async (req, res, next) => {
    try {
        await getOrderById(req, res); // Call the getOrderById controller
    } catch (error) {
        next(error); // Pass any errors to the global error handler
    }
});

export default router;
