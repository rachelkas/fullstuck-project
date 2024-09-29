import Order from '../models/orderModel.js';  // Import the Order model
import Cart from '../models/cart.js';  // Import the Cart model
import Product from '../models/product.js';  // Import the Product model

// Create an order (submit the current cart as an order)
export const createOrder = async (req, res) => {
    try {
        const { items, totalPrice, cartId } = req.body;
        const userId = req.user.id;  // Retrieve the userId from the verified token

        // Fetch the product details for each item (including image)
        const orderItems = await Promise.all(
            items.map(async (item) => {
                const product = await Product.findById(item.productId);
                return {
                    productId: product._id,
                    productName: product.productName,
                    price: product.price,
                    quantity: item.quantity,
                    image: `${process.env.BASE_URL}${product.image}`  // Include image URL
                };
            })
        );

        // Create a new order document with fetched product details
        const newOrder = new Order({
            userId: userId,
            cartId: cartId,
            items: orderItems,  // Store detailed product info including images
            totalPrice: totalPrice,
            orderStatus: 'submitted',  // Set the order status to 'submitted'
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        // Mark the associated cart as 'submitted'
        const cartData = await Cart.findOne({ userId, cartStatus: 'open' });
        if (cartData != null) {
            cartData.cartStatus = 'submitted';
            await cartData.save();
        }

        // Respond with the saved order
        res.status(201).json(savedOrder);
    } catch (err) {
        console.error('Error creating order:', err.message);
        res.status(500).json({ message: `Server Error ${err?.message}` });
    }
};

// Get order by ID (for order details page)
export const getOrderById = async (req, res) => {
    try {
        // Populate the product details within the items field of the order
        const order = await Order.findById(req.params.orderId).populate('items.productId');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Include the product image URL in the order response
        const orderWithImages = {
            ...order._doc,
            items: order.items.map(item => ({
                ...item._doc,
                image: `${process.env.BASE_URL}${item.productId.image}`  // Include image URL
            }))
        };

        res.json(orderWithImages);  // Return the order details with image URLs
    } catch (err) {
        console.error('Error fetching order:', err.message);
        res.status(500).json({ message: `Server Error ${err?.message}` });
    }
};

// Get all orders for a specific user
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id;  // Get the user ID from the verified token
        if (!userId) {
            return res.status(500).json({ message: 'User ID is missing' });  // Error if user ID is missing    
        }
        // Fetch all orders for the authenticated user
        const orders = await Order.find({ userId });

        if (!orders.length) {

            return res.status(204).json({ message: 'No orders found' });  // If no orders are found
        }

        res.status(200).json(orders);  // Return the list of orders
    } catch (err) {
        console.error('Error fetching user orders:', err.message);
        res.status(500).json({ message: `Server Error ${err?.message}` });
    }
};

// Submit an order (change its status to 'submitted')
export const submitOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId);  // Find the order by its ID

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // If the order is already submitted, return an error
        if (order.orderStatus === 'submitted') {
            return res.status(400).json({ message: 'Order already submitted' });
        }

        // Update the order status to 'submitted'
        order.orderStatus = 'submitted';
        await order.save();

        res.status(200).json({ message: 'Order submitted successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
