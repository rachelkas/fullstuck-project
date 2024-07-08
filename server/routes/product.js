import express from 'express';

const router = express.Router();

// Define your product routes here
router.get('/', (req, res) => {
    res.send('Get all products');
});

router.post('/', (req, res) => {
    res.send('Add a new product');
});

export default router;