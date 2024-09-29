// src/models/user.js

// Importing mongoose to define the schema for the User model
import mongoose from 'mongoose';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true // User's first name, required
    },
    lastName: {
        type: String,
        required: true // User's last name, required
    },
    email: {
        type: String,
        required: true,
        unique: true // Email address, must be unique and is required
    },
    password: {
        type: String,
        required: true // Hashed password for the user, required
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Role of the user, can only be 'user' or 'admin'
        default: 'user' // Default role is 'user'
    }
});

// Create and export the User model using the userSchema
const User = mongoose.model('User', userSchema);
export default User;
