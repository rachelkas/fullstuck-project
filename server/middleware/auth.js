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






























//admin work:

// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

//     try {
//         // Extract the token after "Bearer "
//         const tokenPart = token.split(" ")[1];
//         if (!tokenPart) return res.status(400).json({ message: 'Invalid Token Format' });

//         const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
//         req.user = verified.user; // Ensure the user id is correctly assigned to req.user
//         next();
//     } catch (err) {
//         console.error('Token verification failed:', err.message);
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if user is admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         // Ensure req.user.id is available from the verifyToken middleware
//         if (!req.user || !req.user.id) {
//             return res.status(403).json({ message: 'Access Denied: No User ID Found' });
//         }

//         const user = await User.findById(req.user.id);

//         if (user && user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only' });
//         }
//     } catch (err) {
//         console.error('Error checking admin status:', err.message);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };










































// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

//     try {
//         // Extract the token after "Bearer "
//         const tokenPart = token.split(" ")[1];
//         if (!tokenPart) return res.status(400).json({ message: 'Invalid Token Format' });

//         const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
//         req.user = verified.user;  // Make sure this is the correct user ID payload from your token
//         next();
//     } catch (err) {
//         console.error('Token verification failed:', err.message);
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if user is admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         // Ensure req.user.id is available from the verifyToken middleware
//         if (!req.user || !req.user.id) {
//             return res.status(403).json({ message: 'Access Denied: No User ID Found' });
//         }

//         const user = await User.findById(req.user.id);

//         if (user && user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only' });
//         }
//     } catch (err) {
//         console.error('Error checking admin status:', err.message);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };















// Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

//     try {
//         // Check if the token format is valid (i.e., "Bearer <token>")
//         const tokenPart = token.split(" ")[1];
//         if (!tokenPart) return res.status(400).json({ message: 'Invalid Token Format' });

//         // Verify token using the secret key
//         const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);

//         // Attach the verified user to the request object
//         req.user = verified.user;

//         next(); // Proceed to the next middleware
//     } catch (err) {
//         console.error('Token verification failed:', err.message);
//         return res.status(401).json({ message: 'Invalid Token' });
//     }
// };





















import jwt from 'jsonwebtoken';
import User from '../models/user.js';




export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

    try {
        const tokenPart = token.split(" ")[1];  // Extract the actual token from 'Bearer <token>'
        if (!tokenPart) return res.status(400).json({ message: 'Invalid Token Format' });

        // Verify the token
        const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
        req.user = verified.user;  // Attach the user object to req for future middleware/routes

        console.log('User verified:', req.user); // Optional log to debug the verified user

        next();  // Call the next middleware or route handler
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            // Token expired case
            console.error('Token expired:', err.message);
            return res.status(401).json({ message: 'Token expired. Please log in again.' });
        }

        // Other errors (invalid token, etc.)
        console.error('Token verification failed:', err.message);
        return res.status(400).json({ message: 'Invalid Token' });
    }
};

// Middleware to check if the user is an admin
export const isAdmin = async (req, res, next) => {
    try {
        // Ensure req.user.id is available from the verifyToken middleware
        if (!req.user || !req.user.id) {
            return res.status(403).json({ message: 'Access Denied: No User ID Found' });
        }

        // Fetch the user by ID from the database
        const user = await User.findById(req.user.id);

        if (user && user.role === 'admin') {
            next(); // User is admin, proceed to the next middleware or controller
        } else {
            res.status(403).json({ message: 'Access Denied: Admins only' });
        }
    } catch (err) {
        console.error('Error checking admin status:', err.message);
        return res.status(500).json({ message: 'Server Error' });
    }
};















































// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({ message: 'Access Denied: No Token Provided' });
//     }

//     try {
//         // Extract the token after "Bearer "
//         const tokenPart = token.split(" ")[1];
//         if (!tokenPart) {
//             return res.status(400).json({ message: 'Invalid Token Format' });
//         }

//         // Verify token
//         const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
//         req.user = verified; // Store the entire verified token payload in req.user
//         next();
//     } catch (err) {
//         console.error('Token verification failed:', err.message);
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if user is admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         // Ensure req.user.id is available from the verifyToken middleware
//         if (!req.user) {
//             return res.status(403).json({ message: 'Access Denied: No User Found' });
//         }

//         const user = await User.findById(req.user.id);

//         if (user && user.role === 'admin') {
//             next();
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only' });
//         }
//     } catch (err) {
//         console.error('Error checking admin status:', err.message);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };




















// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// // Middleware to verify token
// export const verifyToken = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({ message: 'Access Denied: No Token Provided' });
//     }

//     try {
//         // Extract the token after "Bearer "
//         const tokenPart = token.split(" ")[1];
//         if (!tokenPart) {
//             return res.status(400).json({ message: 'Invalid Token Format' });
//         }

//         // Verify token
//         const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
//         req.user = verified.user || verified._id; // Ensure the user id is correctly assigned to req.user
//         next();
//     } catch (err) {
//         console.error('Token verification failed:', err.message);
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// };

// // Middleware to check if user is admin
// export const isAdmin = async (req, res, next) => {
//     try {
//         // Ensure req.user exists and has an id
//         if (!req.user) {
//             return res.status(403).json({ message: 'Access Denied: No User Found' });
//         }

//         const user = await User.findById(req.user); // Lookup user by ID stored in req.user

//         if (user && user.role === 'admin') {
//             next(); // Continue if user is admin
//         } else {
//             res.status(403).json({ message: 'Access Denied: Admins only' });
//         }
//     } catch (err) {
//         console.error('Error checking admin status:', err.message);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };
