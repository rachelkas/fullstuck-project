// import express from 'express';
// import { createOrder, getOrderById } from '../controllers/orderController.js'; // Import controller functions
// const router = express.Router();

// // POST request to create an order
// router.post('/create', createOrder);


// // You can also add other routes like getting orders by ID
// router.get('/:id', getOrderById);

// // Get all orders for a specific user
// router.get('/', verifyToken, getUserOrders);

// // Get a specific order by ID
// router.get('/:orderId', verifyToken, getOrderById);

// export default router;

















// import express from 'express';
// import { createOrder, getOrderById, getUserOrders } from '../controllers/orderController.js'; // Import controller functions
// import { verifyToken } from '../middleware/auth.js'; // Make sure to import the verifyToken middleware

// const router = express.Router();

// // POST request to create an order
// router.post('/create', verifyToken, createOrder);

// // Get all orders for the logged-in user
// router.get('/', verifyToken, getUserOrders);

// // Get a specific order by ID
// router.get('/:orderId', verifyToken, getOrderById);


// // PUT request to submit the order (finalize and set status to 'submitted')
// router.put('/submit/:orderId', verifyToken, submitOrder);

// export default router;










import express from 'express';
import { createOrder, getOrderById, getUserOrders, submitOrder } from '../controllers/orderController.js';
import { verifyToken } from '../middleware/auth.js';  // Ensure that your token middleware is correctly imported

const router = express.Router();

// Create order
router.post('/create', verifyToken, createOrder);

// Submit order
router.put('/submit/:orderId', verifyToken, submitOrder);

// Get user orders
router.get('/', verifyToken, getUserOrders);

// Get a specific order by ID
router.get('/:orderId', verifyToken, getOrderById);

export default router;