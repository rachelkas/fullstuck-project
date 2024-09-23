// import Joi from 'joi';

// // Validation schema for user registration
// export const registerValidation = (data) => {
//     const schema = Joi.object({
//         firstName: Joi.string().required(),
//         lastName: Joi.string().required(),
//         email: Joi.string().email().required(),
//         password: Joi.string().min(8).required(),
//     });
//     return schema.validate(data);
// };

// // Validation schema for user login
// export const loginValidation = (data) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required(),
//         password: Joi.string().min(8).required(),
//     });
//     return schema.validate(data);
// };













































// src/utils/validation.js

import Joi from 'joi';  // Import Joi for data validation

// Validation schema for user registration
export const registerValidation = (data) => {
    // Define the validation schema using Joi
    const schema = Joi.object({
        firstName: Joi.string().required(),  // firstName is required and must be a string
        lastName: Joi.string().required(),   // lastName is required and must be a string
        email: Joi.string().email().required(),  // Email must be a valid email address and is required
        password: Joi.string().min(8).required(), // Password must have at least 8 characters and is required
    });

    // Validate the data against the schema and return the result
    return schema.validate(data);
};

// Validation schema for user login
export const loginValidation = (data) => {
    // Define the validation schema using Joi
    const schema = Joi.object({
        email: Joi.string().email().required(),  // Email must be valid and required
        password: Joi.string().min(8).required(),  // Password must have at least 8 characters and is required
    });

    // Validate the data against the schema and return the result
    return schema.validate(data);
};
