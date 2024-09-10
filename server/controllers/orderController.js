import Order from '../models/order.js';  // Import the Order model

// Create an order
export const createOrder = async (req, res) => {
    try {
        const { items, totalPrice } = req.body;
        const userId = req.user.id;  // Retrieve the userId from the verified token (from middleware)

        // Create a new order document
        const newOrder = new Order({
            userId: userId,
            items: items,
            totalPrice: totalPrice,
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        // Respond with the saved order
        res.status(201).json(savedOrder);
    } catch (err) {
        console.error('Error creating order:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get order by ID
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        console.error('Error fetching order:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
