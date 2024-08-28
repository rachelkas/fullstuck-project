import express from 'express';
import Product from '../models/product.js';
import multer from 'multer';
import fs from 'fs';
import { verifyToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads/';
        if (!fs.existsSync(dir))
            fs.mkdirSync(dir);

        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + '-' + file.originalname;
        cb(null, file.fieldname + '-' + fileName);
    }
});

const upload = multer({ storage });

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        const productsWithImageUrl = products.map(product => ({
            ...product._doc,
            image: `http://localhost:3000${product.image}` // Adjust the URL accordingly
        }));
        res.json(productsWithImageUrl);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Server Error');
    }
});

// Fetch single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        const productWithImageUrl = {
            ...product._doc,
            image: `http://localhost:3000${product.image}`
        };
        res.json(productWithImageUrl);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).send('Server Error');
    }
});

// Add a new product (admin only)
router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
    const { productName, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    try {
        const newProduct = new Product({ productName, price, description, image });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error('Error adding new product:', err);
        res.status(500).send(`Server Error: ${err}`);
    }
});

// Update product with image (admin only)
router.put('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
    try {
        const { productName, price, description } = req.body;
        const product = await Product.findById(req.query.productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        product.productName = productName;
        product.price = price;
        product.description = description;
        if (req.file) {
            product.image = `/uploads/${req.file.filename}`;
        }
        await product.save();

        // Ensure the image field returns the full URL
        const updatedProduct = {
            ...product._doc,
            image: `http://localhost:3000${product.image}`,
        };

        res.json(updatedProduct);
    } catch (err) {
        console.error('Error updating product:', err);

        // Send a detailed error message to the client
        res.status(500).json({ message: `Server Error: ${err}` });
    }
});

// Search products by name
router.get('/search', async (req, res) => {
    try {
        const { name } = req.query;
        const products = await Product.find({ productName: { $regex: name, $options: 'i' } });
        res.json(products);
    } catch (err) {
        console.error('Error searching products:', err);
        res.status(500).send('Server Error');
    }
});

// Delete product (admin only)
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        await product.remove();
        res.json({ message: 'Product removed' });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).send('Server Error');
    }
});

export default router;
