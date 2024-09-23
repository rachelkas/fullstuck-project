import Joi from 'joi';  // Import Joi for validation

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
