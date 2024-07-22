import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product.js'; // Adjust path if necessary

dotenv.config(); // Ensure your .env file is loaded

const productsData = [
    {
        name: 'XPS 13 Laptop',
        image: '/assets/images/computer1.png', // Updated path
        description: {
            memory: 'Up to 64 GB',
            storage: 'Up to 2 TB',
            display: '34.0cm (13.4")'
        },
        price: 1299.99
    },
    {
        name: 'Portable Bluetooth Speaker',
        image: '/assets/images/bluetooth.png', // Updated path
        description: 'Wireless Speaker with HD Sound, Rich Bass, 12H Playtime & Built-in Mic.',
        price: 44.99
    },
    {
        name: 'Computer bag',
        image: '/assets/images/computerbag.png', // Updated path
        description: 'Laptop bag 12/13 sleeve. 3/14/15.6 inch notebook sleeve for macbook',
        price: 21.35
    },
    {
        name: 'MP3 player',
        image: '/assets/images/mp3.png', // Updated path
        description: 'MP3 Player 1.8 Inch Color Screen Mini BlueTooth',
        price: 37
    },
    {
        name: 'Projector',
        image: '/assets/images/projector.png', // Updated path
        description: 'ED projector in HD resolution for a variety of uses such as home cinema and more.',
        price: 380
    },
    {
        name: 'Tablet',
        image: '/assets/images/tablet.png', // Updated path
        description: 'Tablet 10.1 inch Android 12 Tablet 2023 Latest Update',
        price: 350
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log('Products seeded!');
        process.exit();
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts();