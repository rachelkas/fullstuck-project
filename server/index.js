// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import { verifyToken } from './middleware/auth.js';
// import connectDB from './utils/db.js';

// dotenv.config();

// const app = express();

// app.use(cors({ origin: 'http://localhost:3001' }));
// app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// connectDB();

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

































// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import { verifyToken } from './middleware/auth.js';
// import connectDB from './utils/db.js';

// dotenv.config();

// const app = express();

// app.use(cors({ origin: 'http://localhost:3001' }));
// app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from the "uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// connectDB();

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




























// // index.js

// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import orderRoutes from './routes/orderRoutes.js';
// import contactRoutes from './routes/contact.js'; // Add this line
// import { verifyToken } from './middleware/auth.js';
// import connectDB from './utils/db.js';

// dotenv.config();

// const app = express();

// app.use(cors({ origin: 'http://localhost:3001' }));
// app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from the "uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);
// app.use('/api/contact', contactRoutes);
// app.use('/api/orders', orderRoutes);

// connectDB();

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });










































// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import orderRoutes from './routes/order.js';  // Ensure this is imported correctly
// import contactRoutes from './routes/contact.js';
// import { verifyToken } from './middleware/auth.js';
// import connectDB from './utils/db.js';

// dotenv.config();

// const app = express();

// app.use(cors({ origin: 'http://localhost:3001' }));
// app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from the "uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);
// app.use('/api/orders', verifyToken, orderRoutes);  // Ensure that orders are routed correctly
// app.use('/api/contact', contactRoutes);

// connectDB();

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



































import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import favoriteRoutes from './routes/favorite.js';
import orderRoutes from './routes/order.js';  // Correct import for orders
import contactRoutes from './routes/contact.js';
import { verifyToken } from './middleware/auth.js';  // Import middleware for protected routes
import connectDB from './utils/db.js';  // Import your MongoDB connection utility

dotenv.config();

const app = express();

// CORS configuration
app.use(cors());


// JSON parsing middleware
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', verifyToken, cartRoutes);  // Protect cart routes with verifyToken middleware
app.use('/api/favorites', verifyToken, favoriteRoutes);  // Protect favorites routes
app.use('/api/orders', verifyToken, orderRoutes);  // Protect order routes
app.use('/api/contact', contactRoutes);

// Connect to MongoDB
connectDB();

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
