import express from 'express';
import { check } from 'express-validator';
import { registerController, loginController } from '../controllers/authController.js';

const router = express.Router();

// Register a new user
router.post(
    '/register',
    [
        check('firstName', 'Please enter a valid first name').not().isEmpty(),
        check('lastName', 'Please enter a valid last name').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    registerController
);

// Login user
router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    loginController
);

export default router;
