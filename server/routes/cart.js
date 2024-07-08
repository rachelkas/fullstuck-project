import express from 'express';

const router = express.Router();

// Example route for getting cart items
router.get('/', (req, res) => {
    res.send('Get cart items');
});

// Example route for adding an item to the cart
router.post('/', (req, res) => {
    res.send('Add item to cart');
});

export default router;