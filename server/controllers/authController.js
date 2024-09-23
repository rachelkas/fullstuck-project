// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// export const registerController = async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }
//         user = new User({ firstName, lastName, email, password });
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//         await user.save();
//         const payload = { user: { id: user.id } };
//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const loginController = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'The email or password is wrong' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'The email or password is wrong' });
//         }
//         const payload = { user: { id: user.id } };
//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//             if (err) throw err;
//             res.json({ token, userDetails: user });
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const userController = async (req, res) => {
//     try {
//         const user = await User.findById(req.userId).select('-password');
//         res.json(user);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const adminController = (req, res) => {
//     res.send('Admin route');
// };













































// // authController.js

// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// export const registerController = async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }
//         user = new User({ firstName, lastName, email, password });
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//         await user.save();
//         const payload = { user: { id: user.id } };
//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const loginController = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'The email or password is wrong' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'The email or password is wrong' });
//         }
//         const payload = { user: { id: user.id } };
//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//             if (err) throw err;
//             res.json({ token, userDetails: user });
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const userController = async (req, res) => {
//     try {
//         const user = await User.findById(req.userId).select('-password');
//         res.json(user);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const adminController = (req, res) => {
//     res.send('Admin route');
// };

// // Update User Details
// export const updateUserController = async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;

//     try {
//         // Find user by ID from the token
//         const user = await User.findById(req.user.id);

//         if (!user) {
//             return res.status(404).json({ msg: 'User not found' });
//         }

//         // Update fields
//         if (firstName) user.firstName = firstName;
//         if (lastName) user.lastName = lastName;
//         if (email) user.email = email;

//         if (password) {
//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(password, salt);
//         }

//         await user.save();

//         res.json(user);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };





































// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// export const registerController = async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }
//         user = new User({ firstName, lastName, email, password });
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//         await user.save();
//         const payload = { user: { id: user.id } };
//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//             if (err) throw err;
//             res.json({ token, userDetails: user });
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const loginController = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'The email or password is wrong' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'The email or password is wrong' });
//         }
//         const payload = { user: { id: user.id } };
//         jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//             if (err) throw err;
//             res.json({ token, userDetails: user });
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// export const updateUserController = async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;

//     try {
//         // Find user by ID from the token
//         const user = await User.findById(req.user.id);

//         if (!user) {
//             return res.status(404).json({ msg: 'User not found' });
//         }

//         // Update fields
//         if (firstName) user.firstName = firstName;
//         if (lastName) user.lastName = lastName;
//         if (email) user.email = email;

//         if (password) {
//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(password, salt);
//         }

//         await user.save();

//         res.json(user);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// };

// search products
// export const searchProducts = async (req, res) => {
//     const { search } = req.query;
//     try {
//         const products = await
//             Product.find({ name: { $regex: search, $options: 'i' } });
//         res.json(products);
//     }
//     catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// }





















































// Import necessary libraries and models
import bcrypt from 'bcryptjs';  // For password hashing
import jwt from 'jsonwebtoken';  // For generating JWT tokens
import User from '../models/user.js';  // Importing the User model

// Register Controller
export const registerController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        let user = await User.findOne({ email });  // Check if the user already exists
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user and hash the password
        user = new User({ firstName, lastName, email, password });
        const salt = await bcrypt.genSalt(10);  // Generate salt for hashing
        user.password = await bcrypt.hash(password, salt);  // Hash the password with salt
        await user.save();  // Save the new user in the database

        // Create a JWT token for the user
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token, userDetails: user });  // Send token and user details to the client
        });
    } catch (err) {
        console.error(err.message);  // Log any errors
        res.status(500).send('Server Error');  // Send server error response
    }
};

// Login Controller
export const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });  // Check if user exists
        if (!user) {
            return res.status(400).json({ msg: 'The email or password is wrong' });
        }

        const isMatch = await bcrypt.compare(password, user.password);  // Compare provided password with hashed password
        if (!isMatch) {
            return res.status(400).json({ msg: 'The email or password is wrong' });
        }

        // Create a JWT token for the authenticated user
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token, userDetails: user });  // Send token and user details to the client
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update User Controller
export const updateUserController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Find user by ID (user is authenticated via JWT token)
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Update the user fields
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;

        // Hash the new password if it is provided
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();  // Save the updated user details
        res.json(user);  // Return the updated user
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
