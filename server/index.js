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

// // Load environment variables
// dotenv.config();

// // Create an Express application
// const app = express();

// // Middleware configuration
// app.use(cors({
//     origin: 'http://localhost:3001'
// }));
// app.use(express.json());

// // Setting up the base directory equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from the "public/uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// // Define routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Failed to connect to MongoDB', err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// // Start the server
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

// // Load environment variables
// dotenv.config();

// // Create an Express application
// const app = express();

// // Middleware configuration
// app.use(cors({
//     origin: 'http://localhost:3001'
// }));
// app.use(express.json());

// // Setting up the base directory equivalent
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from the "public/uploads" directory
// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// // Define routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_CONNECTION)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Failed to connect to MongoDB', err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// // Start the server
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
// import User from './models/user.js';

// dotenv.config();

// const app = express();

// app.use(cors({
//     origin: 'http://localhost:3001'
// }));
// app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// app.get('/api/user', verifyToken, async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const user = await User.findById(userId).select('-password');
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json(user);
//     } catch (err) {
//         console.error('Error fetching user:', err);
//         res.status(500).send('Server Error');
//     }
// });

// mongoose.connect(process.env.MONGODB_CONNECTION)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Failed to connect to MongoDB', err));

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


































// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import { verifyToken } from './middleware/auth.js';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.error(err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

































// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import { verifyToken } from './middleware/auth.js';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.error('Failed to connect to MongoDB', err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
















































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
import { verifyToken } from './middleware/auth.js';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', verifyToken, cartRoutes);
app.use('/api/favorites', verifyToken, favoriteRoutes);

connectDB();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
