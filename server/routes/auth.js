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
import User from '../models/user.js';
import { registerValidation, loginValidation } from '../utils/user.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    const validPass = await user.comparePassword(req.body.password);
    if (!validPass) return res.status(400).send('Email or password is wrong');

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send({ token });
});

export default router;