import Joi from 'joi';

const orderValidation = (data) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        cartId: Joi.string().required(),
        items: Joi.array().items(Joi.object({
            productId: Joi.string().required(),
            quantity: Joi.number().integer().min(1).required(),
            price: Joi.number().positive().required(),
        })).required(),
        totalPrice: Joi.number().positive().required(),
    });

    return schema.validate(data);
};

export default orderValidation;
