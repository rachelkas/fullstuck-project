import Joi from 'joi';

// Register Validation
export const registerValidation = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().min(2).required(),
        lastname: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-zA-Z]{2})(?=.*\\d{8})[a-zA-Z\\d]{10,}$')).required()
    });
    return schema.validate(data);
};

// Login Validation
export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-zA-Z]{2})(?=.*\\d{8})[a-zA-Z\\d]{10,}$')).required()
    });
    return schema.validate(data);
};