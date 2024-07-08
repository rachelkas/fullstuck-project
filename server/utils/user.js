import Joi from 'joi';

export const registerValidation = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().min(2).required(),
        lastname: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string()
            .pattern(/^(?=.*[0-9].*[0-9])(?=.*[a-zA-Z].*[a-zA-Z]).{8,}$/)
            .required()
            .messages({
                'string.pattern.base': 'Password must contain at least 8 numbers and 2 letters'
            })
    });
    return schema.validate(data);
};

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};