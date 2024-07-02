// import { JWT_SECRET } from '../config.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// // Example user database (replace with your actual MongoDB/Mongoose setup)
// let users = [];

// const register = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Check if user already exists
//         const existingUser = users.find(user => user.username === username);
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 12);

//         // Create new user object
//         const newUser = { id: users.length + 1, username, password: hashedPassword };
//         users.push(newUser);

//         // Generate JWT token
//         const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });

//         // Return success response with token
//         res.status(201).json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// const login = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Find user by username
//         const user = users.find(user => user.username === username);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Check password
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

//         // Return success response with token
//         res.status(200).json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// export default {
//     register,
//     login
// };











// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js'; // Update path as necessary

// const registerUser = async (req, res) => {
//     // Logic to register user
//     const { username, password } = req.body;

//     // Example usage of environment variables
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Example JWT usage
//     const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Example MongoDB usage
//     const newUser = new User({
//         username,
//         password: hashedPassword
//     });

//     try {
//         const savedUser = await newUser.save();
//         res.json({ user: savedUser, token });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const loginUser = async (req, res) => {
//     // Logic to login user
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ token });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export { registerUser, loginUser };





















import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Update path as necessary

const registerUser = async (req, res) => {
    // Logic to register user
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        let existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newUser = new User({
            username,
            password: hashedPassword
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with user and token
        res.json({ user: savedUser, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    // Logic to login user
    const { username, password } = req.body;

    try {
        // Find user in the database
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with token
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { registerUser, loginUser };