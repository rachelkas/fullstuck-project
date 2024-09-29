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
    const { error } = registerValidation(req.body, false); // Reusing the register validation for optional fields
    if (error) return res.status(400).json({ message: error.details[0].message });

    // If validation passes, proceed to the updateUserController
    updateUserController(req, res);
});

// Export the router to be used in the application
export default router;
