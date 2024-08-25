// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// export const verifyToken = (req, res, next) => {
//     const token = req.header('auth-token');

//     if (!token) {
//         return res.status(401).send('Access Denied');
//     }

//     try {
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).send('Invalid Token');
//     }
// };

// export const isAdmin = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).send('Access Denied');
//         }
//     } catch (err) {
//         res.status(500).send('Server Error');
//     }
// };

// export const isAdminOrOwner = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (user.role === 'admin' || user._id.toString() === req.params.userId) {
//             next();
//         } else {
//             res.status(403).send('Access Denied');
//         }
//     } catch (err) {
//         res.status(500).send('Server Error');
//     }
// };

































// // middleware/auth.js
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify a JWT token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('auth-token');

//     if (!token) {
//         return res.status(401).send('Access Denied');
//     }

//     try {
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).send('Invalid Token');
//     }
// };

// // Middleware to check if the user has admin privileges
// export const isAdmin = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).send('Access Denied');
//         }
//     } catch (err) {
//         res.status(500).send('Server Error');
//     }
// };

// // Middleware to check if the user is an admin or the owner
// export const isAdminOrOwner = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (user.role === 'admin' || user._id.toString() === req.params.userId) {
//             next();
//         } else {
//             res.status(403).send('Access Denied');
//         }
//     } catch (err) {
//         res.status(500).send('Server Error');
//     }
// };



































// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// export const verifyToken = (req, res, next) => {
//     const authHeader = req.header('Authorization');
//     if (!authHeader) return res.status(401).json({ message: 'Access Denied' });

//     const token = authHeader.split(" ")[1]; // Extract the token after "Bearer"
//     if (!token) return res.status(401).json({ message: 'Access Denied' });

//     try {
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         console.error('Token verification error:', err); // Log the error for debugging
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// export const isAdmin = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         if (user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only.' });
//         }
//     } catch (err) {
//         console.error('Admin check error:', err); // Log the error for debugging
//         res.status(500).json({ message: 'Server Error' });
//     }
// };























// // server/middleware/auth.js
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access Denied' });

//     try {
//         // Extract the token after "Bearer "
//         const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if user is admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only.' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// };















// server/middleware/auth.js
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access Denied' });

//     try {
//         const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if the user is an admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only.' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// };






































// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access Denied' });

//     try {
//         const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//         req.user = verified.user;
//         next();
//     } catch (err) {
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if the user is an admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id);
//         if (user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only.' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// };










































import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// Middleware to verify token
export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });
    try {
        // Extract the token after "Bearer "
        const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

// Middleware to check if user is admin
export const isAdmin = async (req, res, next) => {
    try {
        const {userId} = req.query;
        const user = await User.findById(userId);
        // to change this condition, when there will be data for admin user in db.
        if (user.role === 'admin' || user.role !== 'admin') {
            next();
        } else {
            res.status(403).json({ message: 'Access Denied: Admins only.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
