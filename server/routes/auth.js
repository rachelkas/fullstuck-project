// import express from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';
// import { registerValidation, loginValidation } from '../utils/validation.js';

// const router = express.Router();

// // Register
// router.post('/register', async (req, res) => {
//     // Validate the data
//     const { error } = registerValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     // Check if the user already exists
//     const emailExist = await User.findOne({ email: req.body.email });
//     if (emailExist) return res.status(400).send('Email already exists');

//     // Create a new user
//     const user = new User({
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         password: req.body.password
//     });

//     try {
//         const savedUser = await user.save();
//         res.send({ user: user._id });
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// // Login
// router.post('/login', async (req, res) => {
//     // Validate the data
//     const { error } = loginValidation(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     // Check if the user exists
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return res.status(400).send('Email or password is wrong');

//     // Check if the password is correct
//     const validPass = await user.comparePassword(req.body.password);
//     if (!validPass) return res.status(400).send('Email or password is wrong');

//     // Create and assign a token
//     const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET);
//     res.header('auth-token', token).send({ token });
// });

// export default router;





import express from 'express';
import { registerValidation, loginValidation } from '../utils/user.js';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    // Validate the data before creating a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Login a user
router.post('/login', async (req, res) => {
    // Validate the data before logging in a user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    // Check if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send({ token });
});

// Get all users (for testing purposes)
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;