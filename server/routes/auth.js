// import express from 'express';
// import { check } from 'express-validator';
// import { registerController, loginController } from '../controllers/authController.js';

// const router = express.Router();

// // Register a new user
// router.post(
//     '/register',
//     [
//         check('firstName', 'Please enter a valid first name').not().isEmpty(),
//         check('lastName', 'Please enter a valid last name').not().isEmpty(),
//         check('email', 'Please enter a valid email').isEmail(),
//         check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
//     ],
//     registerController
// );

// // Login user
// router.post(
//     '/login',
//     [
//         check('email', 'Please include a valid email').isEmail(),
//         check('password', 'Password is required').exists()
//     ],
//     loginController
// );



// export default router;
































// import express from 'express';
// import { check } from 'express-validator';
// import { registerController, loginController } from '../controllers/authController.js';

// const router = express.Router();

// // Register a new user
// router.post(
//     '/register',
//     [
//         check('firstName', 'Please enter a valid first name').not().isEmpty(),
//         check('lastName', 'Please enter a valid last name').not().isEmpty(),
//         check('email', 'Please enter a valid email').isEmail(),
//         check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
//     ],
//     registerController
// );

// // Login user
// router.post(
//     '/login',
//     [
//         check('email', 'Please include a valid email').isEmail(),
//         check('password', 'Password is required').exists()
//     ],
//     loginController
// );

// // Logout user (Not necessary for JWT, handled client-side)
// router.get('/logout', (req, res) => {
//     res.send('logged out');
// });



// export default router;


































// import express from 'express';
// import { check } from 'express-validator';
// import { registerController, loginController, updateUserController } from '../controllers/authController.js';
// import { verifyToken } from '../middleware/auth.js'; // Assuming you have this middleware to verify JWTs

// const router = express.Router();

// // Register a new user
// router.post(
//     '/register',
//     [
//         check('firstName', 'Please enter a valid first name').not().isEmpty(),
//         check('lastName', 'Please enter a valid last name').not().isEmpty(),
//         check('email', 'Please enter a valid email').isEmail(),
//         check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
//     ],
//     registerController
// );

// // Login user
// router.post(
//     '/login',
//     [
//         check('email', 'Please include a valid email').isEmail(),
//         check('password', 'Password is required').exists()
//     ],
//     loginController
// );

// // Logout user (Not necessary for JWT, handled client-side)
// router.get('/logout', (req, res) => {
//     res.send('logged out');
// });

// // Update user details
// router.put(
//     '/update',
//     verifyToken,
//     [
//         check('email', 'Please include a valid email').optional().isEmail(),
//         check('firstName', 'First name is required').optional().not().isEmpty(),
//         check('lastName', 'Last name is required').optional().not().isEmpty(),
//     ],
//     updateUserController
// );

// export default router;































// // src/routes/auth.js

// // Import necessary modules
// import express from 'express';
// import { check } from 'express-validator';
// import { registerController, loginController, updateUserController } from '../controllers/authController.js';
// import { verifyToken } from '../middleware/auth.js'; // Middleware to verify JWT tokens

// // Create a router instance
// const router = express.Router();

// // Register a new user route
// router.post(
//     '/register',
//     [
//         // Validation checks for registration
//         check('firstName', 'Please enter a valid first name').not().isEmpty(), // Validate first name is not empty
//         check('lastName', 'Please enter a valid last name').not().isEmpty(),   // Validate last name is not empty
//         check('email', 'Please enter a valid email').isEmail(),                // Validate email format
//         check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }) // Password validation
//     ],
//     registerController // Controller function to handle registration
// );

// // Login user route
// router.post(
//     '/login',
//     [
//         // Validation checks for login
//         check('email', 'Please include a valid email').isEmail(),  // Validate email format
//         check('password', 'Password is required').exists()         // Ensure password field exists
//     ],
//     loginController // Controller function to handle login
// );

// // Logout user route (usually handled client-side for JWT authentication)
// router.get('/logout', (req, res) => {
//     res.send('logged out'); // Simply send a message, as JWT doesn't require server-side logout handling
// });

// // Update user details route
// router.put(
//     '/update',
//     verifyToken, // Middleware to ensure the user is authenticated with a valid token
//     [
//         // Optional validation checks for update
//         check('email', 'Please include a valid email').optional().isEmail(),  // Validate email only if provided
//         check('firstName', 'First name is required').optional().not().isEmpty(), // Validate first name if provided
//         check('lastName', 'Last name is required').optional().not().isEmpty(),   // Validate last name if provided
//     ],
//     updateUserController // Controller function to handle profile update
// );

// // Export the router to be used in the application
// export default router;
































// Import necessary modules
import express from 'express';
import { registerValidation } from '../utils/validations/registerValidation.js';  // Import registration validation
import { loginValidation } from '../utils/validations/loginValidation.js';  // Import login validation
import { registerController, loginController, updateUserController } from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js'; // Middleware to verify JWT tokens

// Create a router instance
const router = express.Router();

// Register a new user route
router.post('/register', async (req, res) => {
    // Use registerValidation to validate the incoming registration data
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // If validation passes, proceed to the register controller
    registerController(req, res);
});

// Login user route
router.post('/login', async (req, res) => {
    // Use loginValidation to validate the incoming login data
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // If validation passes, proceed to the login controller
    loginController(req, res);
});

// Logout user route (usually handled client-side for JWT authentication)
router.get('/logout', (req, res) => {
    res.send('logged out'); // Simply send a message, as JWT doesn't require server-side logout handling
});

// Update user details route
router.put('/update', verifyToken, async (req, res) => {
    // Optional validation for updating the user profile
    const { error } = registerValidation(req.body); // Reusing the register validation for optional fields
    if (error) return res.status(400).json({ message: error.details[0].message });

    // If validation passes, proceed to the updateUserController
    updateUserController(req, res);
});

// Export the router to be used in the application
export default router;
