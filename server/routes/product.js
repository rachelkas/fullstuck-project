// import express from 'express';
// import Product from '../models/product.js';
// import multer from 'multer';
// import { verifyToken, isAdmin } from '../middleware/auth.js';

// const router = express.Router();

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         const fileName = Date.now() + '-' + file.originalname;
//         cb(null, file.fieldname + '-' + fileName);
//     }
// });

// const upload = multer({ storage });

// // Get all products
// router.get('/', async (req, res) => {
//     try {
//         const products = await Product.find();
//         const productsWithImageUrl = products.map(product => ({
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         }));
//         res.json(productsWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Add a new product (admin only)
// router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     const { productName, price, description } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : '';
//     try {
//         const newProduct = new Product({ productName, price, description, image });
//         const product = await newProduct.save();
//         res.json(product);
//     } catch (err) {
//         console.error('Error adding new product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// });

// // Search products by name
// router.get('/search', async (req, res) => {
//     try {
//         const { name } = req.query;
//         const products = await Product.find({ productName: { $regex: name, $options: 'i' } });
//         res.json(products);
//     } catch (err) {
//         console.error('Error searching products:', err);
//         res.status(500).send('Server Error');
//     }
// });


// //update product+img
// router.put('/:id', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     try {
//         const { productName, price, description } = req.body;
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         product.productName = productName;
//         product.price = price;
//         product.description = description;
//         if (req.file) {
//             product.image = `/uploads/${req.file.filename}`;
//         }
//         await product.save();
//         res.json(product);
//     } catch (err) {
//         console.error('Error updating product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// }
// );

// //get product by id
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         res.json(product);
//     } catch (err) {
//         console.error('Error fetching product:', err);
//         res.status(500).send('Server Error');
//     }
// }
// );

// //delete product
// router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         await product.remove();
//         res.json({ message: 'Product removed' });
//     } catch (err) {
//         console.error('Error deleting product:', err);
//         res.status(500).send('Server Error');
//     }
// }
// );



// export default router;

































import express from 'express';
import Product from '../models/product.js';
import multer from 'multer';
import { verifyToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
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
            image: `http://localhost:3000${product.image}`
        }));
        res.json(productsWithImageUrl);
    } catch (err) {
        console.error('Error fetching products:', err);
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

// // Update product with image
// router.put('/:id', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     try {
//         const { productName, price, description } = req.body;
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         product.productName = productName;
//         product.price = price;
//         product.description = description;
//         if (req.file) {
//             product.image = `/uploads/${req.file.filename}`;
//         }
//         await product.save();

//         // Ensure the image field returns the full URL
//         const updatedProduct = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`,
//         };

//         res.json(updatedProduct);
//     } catch (err) {
//         console.error('Error updating product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// });


// Update product with image
//url: http://localhost:3000/api/products/60f3b3b3b3b3b3b3b3b3b3b3
router.put('/:id', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
    try {
        const { productName, price, description } = req.body;
        const product = await Product.findById(req.params.id);
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
        res.status(500).json({ message: 'Server Error', error: err.message, stack: err.stack });
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

// Get product by id
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).send('Server Error');
    }
});

// Delete product
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
