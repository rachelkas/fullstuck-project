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
        const user = await User.findById(req.user.id);
        if (user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: 'Access Denied: Admins only.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
