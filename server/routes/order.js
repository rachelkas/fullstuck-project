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










// import express from 'express';
// import { createOrder, getOrderById, getUserOrders, submitOrder } from '../controllers/orderController.js';
// import { verifyToken } from '../middleware/auth.js';  // Ensure that your token middleware is correctly imported

// const router = express.Router();

// // Create order
// router.post('/create', verifyToken, createOrder);

// // Submit order
// router.put('/submit/:orderId', verifyToken, submitOrder);

// // Get user orders
// router.get('/', verifyToken, getUserOrders);

// // Get a specific order by ID
// router.get('/:orderId', verifyToken, getOrderById);

// export default router;











































// // src/routes/order.js

// import express from 'express';
// import { createOrder, getOrderById, getUserOrders, submitOrder } from '../controllers/orderController.js'; // Import order controller methods
// import { verifyToken } from '../middleware/auth.js';  // Import the middleware to verify JWT tokens

// // Create a new router instance
// const router = express.Router();

// // Create a new order
// // This route is protected, so it requires a valid token for the user to place an order
// router.post('/create', verifyToken, createOrder);

// // Submit an existing order by order ID
// // This route is also protected, and it allows the user to submit an order they have created
// router.put('/submit/:orderId', verifyToken, submitOrder);

// // Get all orders for the logged-in user
// // Protected route that fetches all orders of the authenticated user
// router.get('/', verifyToken, getUserOrders);

// // Get details of a specific order by its ID
// // Protected route that returns the details of a particular order by its ID
// router.get('/:orderId', verifyToken, getOrderById);

// // Export the router for use in the application
// export default router;






































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
