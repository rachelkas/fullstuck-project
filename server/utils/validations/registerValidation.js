import Joi from 'joi';  // Import Joi for data validation

// Validation schema for user registration
export const registerValidation = (data, isPasswordReq = true) => {
    // Define the validation schema using Joi
    const schemaValidation = {
        firstName: Joi.string().required(),  // firstName is required and must be a string
        lastName: Joi.string().required(),   // lastName is required and must be a string
        email: Joi.string().email().required(),  // Email must be a valid email address and is required
        // password: Joi.string().min(8).required(), // Password must have at least 8 characters and is required
    };
    if (isPasswordReq) {
        schemaValidation.password = Joi.string().min(8).required();
    }
    const schema = Joi.object(schemaValidation);  // Create a Joi object with the schema
    // Validate the data against the schema and return the result
    return schema.validate(data);
};
