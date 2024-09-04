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
//         const { userId } = req.query;
//         const user = await User.findById(userId);
//         // to change this condition, when there will be data for admin user in db.
//         if (user.role === 'admin' || user.role !== 'admin') {
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
//         // Extract the token after "Bearer "
//         const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//         req.user = verified; // Contains user id from JWT payload
//         next();
//     } catch (err) {
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if user is admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         // Extract user ID from the verified token
//         const user = await User.findById(req.user.id);

//         if (user && user.role === 'admin') {
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
    if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

    try {
        // Extract the token after "Bearer "
        const tokenPart = token.split(" ")[1];
        if (!tokenPart) return res.status(400).json({ message: 'Invalid Token Format' });

        const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
        req.user = verified.user; // Ensure the user id is correctly assigned to req.user
        next();
    } catch (err) {
        console.error('Token verification failed:', err.message);
        res.status(400).json({ message: 'Invalid Token' });
    }
};

// Middleware to check if user is admin
export const isAdmin = async (req, res, next) => {
    try {
        // Ensure req.user.id is available from the verifyToken middleware
        if (!req.user || !req.user.id) {
            return res.status(403).json({ message: 'Access Denied: No User ID Found' });
        }

        const user = await User.findById(req.user.id);

        if (user && user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: 'Access Denied: Admins only' });
        }
    } catch (err) {
        console.error('Error checking admin status:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
