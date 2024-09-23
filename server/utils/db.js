// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_CONNECTION, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// export default connectDB;




































// src/config/db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from .env file

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from environment variables
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,   // Use the new URL string parser
            useUnifiedTopology: true, // Use the new server discovery and monitoring engine
        });
        console.log('MongoDB Connected...'); // Log success message if connection is established
    } catch (err) {
        console.error(err.message); // Log error message in case of failure
        process.exit(1); // Exit the process with failure code if connection fails
    }
};

export default connectDB; // Export the connection function
