import Joi from 'joi';

// Validation schema for user registration
export const registerValidation = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });

    return schema.validate(data);
};

// Validation schema for user login
export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });

    return schema.validate(data);
};