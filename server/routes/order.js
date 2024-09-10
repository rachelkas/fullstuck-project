import express from 'express';
import { createOrder, getOrderById } from '../controllers/orderController.js'; // Import controller functions
const router = express.Router();

// POST request to create an order
router.post('/create', createOrder);


// You can also add other routes like getting orders by ID
router.get('/:id', getOrderById);

export default router;
