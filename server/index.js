// // index.js
// Import necessary libraries
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import favoriteRoutes from './routes/favorite.js';
import orderRoutes from './routes/order.js';  // Correct import for orders


// Import middleware for protected routes
import { verifyToken } from './middleware/auth.js';

// Import MongoDB connection utility
import connectDB from './utils/db.js';

// Load environment variables
dotenv.config();

const app = express();

// Configure CORS to allow requests from other origins
app.use(cors());

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Configure __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define API routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/products', productRoutes);  // Product routes
app.use('/api/cart', verifyToken, cartRoutes);  // Protect cart routes with verifyToken middleware
app.use('/api/favorites', verifyToken, favoriteRoutes);  // Protect favorites routes
app.use('/api/orders', verifyToken, orderRoutes);  // Protect order routes



// Connect to MongoDB
connectDB();

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error details for debugging
    res.status(500).send('Something broke!');  // Send a generic error message to the client
});

// Start the server and listen on the defined port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
