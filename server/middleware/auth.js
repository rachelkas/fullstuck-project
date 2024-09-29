import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

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


