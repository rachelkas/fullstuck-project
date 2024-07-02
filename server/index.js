// import express from 'express';
// import mongoose from 'mongoose';
// import authRoutes from './routes/auth.js';
// import productRoutes from './routes/product.js';
// import cartRoutes from './routes/cart.js';
// import favoriteRoutes from './routes/favorite.js';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();
// const app = express();

// app.use(cors());

// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/favorites', favoriteRoutes);

// mongoose.connect(config.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
//     console.log('Connected to DB!')
// );

// app.listen(3000, () => console.log('Server up and running'));











import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import favoriteRoutes from './routes/favorite.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/favorites', favoriteRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

// Event listeners for MongoDB connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server up and running on http://localhost:${PORT}`);
});