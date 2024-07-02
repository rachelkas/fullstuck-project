// import express from 'express';
// import authController from '../controllers/authController.js'; // Adjust the path as necessary
// import { register, login } from '../controllers/authController.js';

// const router = express.Router();

// // Define your routes using the imported controller functions
// // router.post('/register', authController.register);
// // router.post('/login', authController.login);
// router.post('/register', register);
// router.post('/login', login);

// export default router;






import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js'; // Adjust the path as necessary

const router = express.Router();

// Define your routes using the imported controller functions
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;