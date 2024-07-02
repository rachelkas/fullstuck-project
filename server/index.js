import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import favoriteRoutes from './routes/favorite.js';
import config from './config.js';

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/favorites', favoriteRoutes);

mongoose.connect(config.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DB!')
);

app.listen(3000, () => console.log('Server up and running'));