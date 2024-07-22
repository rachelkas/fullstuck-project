// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import { verifyToken } from './middleware/auth.js';

// dotenv.config(); // Load environment variables from .env file

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Define routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_CONNECTION)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Failed to connect to MongoDB', err));

// // Middleware for handling errors
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server up and running on http://localhost:${PORT}`);
// });









// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import { verifyToken } from './middleware/auth.js';

// dotenv.config(); // Load environment variables from .env file

// const app = express();
// app.use(cors({
//     origin: 'http://localhost:3001' // Your client URL
// }));
// app.use(express.json());

// // Define routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', verifyToken, cartRoutes);
// app.use('/api/favorites', verifyToken, favoriteRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_CONNECTION)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Failed to connect to MongoDB', err));

// // Middleware for handling errors
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server up and running on http://localhost:${PORT}`);
// });









import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import favoriteRoutes from './routes/favorite.js';
import { verifyToken } from './middleware/auth.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors({
    origin: 'http://localhost:3001' // Your client URL
}));
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', verifyToken, cartRoutes);
app.use('/api/favorites', verifyToken, favoriteRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server up and running on http://localhost:${PORT}`);
});