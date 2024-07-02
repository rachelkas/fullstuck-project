import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import config from './config.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
// Additional routes for products, cart, and favorite will be added here

mongoose.connect(config.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DB!')
);

app.listen(3000, () => console.log('Server up and running'));