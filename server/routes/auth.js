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


















// In routes/auth.js
// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';
// import { check, validationResult } from 'express-validator';
// import { verifyToken } from '../middleware/auth.js';

// const router = express.Router();

// // Register new user
// router.post(
//     '/register',
//     [
//         check('firstName', 'First name is required').not().isEmpty(),
//         check('lastName', 'Last name is required').not().isEmpty(),
//         check('email', 'Please include a valid email').isEmail(),
//         check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const { firstName, lastName, email, password } = req.body;

//         try {
//             let user = await User.findOne({ email });

//             if (user) {
//                 return res.status(400).json({ msg: 'User already exists' });
//             }

//             user = new User({
//                 firstName,
//                 lastName,
//                 email,
//                 password,
//             });

//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(password, salt);

//             await user.save();

//             const payload = {
//                 user: {
//                     id: user.id,
//                 },
//             };

//             jwt.sign(
//                 payload,
//                 process.env.JWT_SECRET,
//                 { expiresIn: '1h' },
//                 (err, token) => {
//                     if (err) throw err;
//                     res.json({ token });
//                 }
//             );
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server error');
//         }
//     }
// );

// // Login user
// router.post(
//     '/login',
//     [
//         check('email', 'Please include a valid email').isEmail(),
//         check('password', 'Password is required').exists(),
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const { email, password } = req.body;

//         try {
//             const user = await User.findOne({ email });

//             if (!user) {
//                 return res.status(400).json({ msg: 'Invalid credentials' });
//             }

//             const isMatch = await bcrypt.compare(password, user.password);

//             if (!isMatch) {
//                 return res.status(400).json({ msg: 'Invalid credentials' });
//             }

//             const payload = {
//                 user: {
//                     id: user.id,
//                 },
//             };

//             jwt.sign(
//                 payload,
//                 process.env.JWT_SECRET,
//                 { expiresIn: '1h' },
//                 (err, token) => {
//                     if (err) throw err;
//                     res.json({ token });
//                 }
//             );
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server error');
//         }
//     }
// );

// // Get authenticated user's details
// router.get('/user', verifyToken, async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select('-password');
//         res.json(user);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// export default router;


























































































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
