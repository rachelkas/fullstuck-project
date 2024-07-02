import express from 'express';
const router = express.Router();

// Example route handlers
router.get('/', (req, res) => {
    // Logic to fetch all products
    res.send('List of products');
});

router.get('/:id', (req, res) => {
    // Logic to fetch a specific product by ID
    const productId = req.params.id;
    res.send(`Product with ID ${productId}`);
});

// Add more routes as needed

export default router;