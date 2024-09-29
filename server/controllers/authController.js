// Import necessary libraries and models
import bcrypt from 'bcryptjs';  // For password hashing
import jwt from 'jsonwebtoken';  // For generating JWT tokens
import User from '../models/userModel.js';  // Importing the User model
// import { registerValidation } from '../validations/registerValidation.js';  // Validation for registration
import { registerValidation } from '../utils/validations/registerValidation.js';  // Validation for registration
import { loginValidation } from '../utils/validations/loginValidation.js';  // Validation for login

// Register Controller
export const registerController = async (req, res) => {
    // Validate the request data before proceeding
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ msg: error.details[0].message });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
        let user = await User.findOne({ email });  // Check if the user already exists
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user instance and hash the password
        user = new User({ firstName, lastName, email, password });
        const salt = await bcrypt.genSalt(10);  // Generate salt for hashing
        user.password = await bcrypt.hash(password, salt);  // Hash the password with salt
        await user.save();  // Save the new user in the database

        // Create a JWT token for the user
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
            if (err) throw err;
            res.status(201).json({ token, userDetails: user });  // Send token and user details to the client
        });
    } catch (err) {
        console.error(err.message);  // Log any errors
        res.status(500).json({ msg: 'Server Error' });  // Send server error response
    }
};

// Login Controller
export const loginController = async (req, res) => {
    // Validate the login data
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({ msg: error.details[0].message });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });  // Check if user exists
        if (!user) {
            return res.status(400).json({ msg: 'The email or password is wrong' });
        }

        const isMatch = await bcrypt.compare(password, user.password);  // Compare provided password with hashed password
        if (!isMatch) {
            return res.status(400).json({ msg: 'The email or password is wrong' });
        }

        // Create a JWT token for the authenticated user
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
            if (err) throw err;
            res.status(200).json({ token, userDetails: user });  // Send token and user details to the client
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Update User Controller
export const updateUserController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Find user by ID (user is authenticated via JWT token)
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Update the user fields
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;

        // Hash the new password if it is provided
        // if (password) {
        //     const salt = await bcrypt.genSalt(10);
        //     user.password = await bcrypt.hash(password, salt);
        // }

        await user.save();  // Save the updated user details
        res.status(200).json({ msg: 'User updated successfully', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};
