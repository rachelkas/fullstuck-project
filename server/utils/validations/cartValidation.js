import Joi from 'joi';

const cartValidation = (data) => {
    const schema = Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().integer().min(1).required(),
        userId: Joi.string().required(),  // Assuming userId is passed in the request
    });

    return schema.validate(data);
};

export default cartValidation;
