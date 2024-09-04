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


































import express from 'express';
import { check } from 'express-validator';
import { registerController, loginController, updateUserController } from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js'; // Assuming you have this middleware to verify JWTs

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

// Logout user (Not necessary for JWT, handled client-side)
router.get('/logout', (req, res) => {
    res.send('logged out');
});

// Update user details
router.put(
    '/update',
    verifyToken,
    [
        check('email', 'Please include a valid email').optional().isEmail(),
        check('firstName', 'First name is required').optional().not().isEmpty(),
        check('lastName', 'Last name is required').optional().not().isEmpty(),
    ],
    updateUserController
);

export default router;
