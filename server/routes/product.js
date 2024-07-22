
import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Add a new product
router.post('/', async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const newProduct = new Product({
            name,
            price,
            description
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Search products by name
router.get('/search', async (req, res) => {
    try {
        const { name } = req.query;
        console.log('Search request received:', name);
        const products = await Product.find({ name: { $regex: name, $options: 'i' } });
        console.log('Search results:', products);
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

export default router;