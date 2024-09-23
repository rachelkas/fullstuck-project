import Joi from 'joi';

const productValidation = (data) => {
    const schema = Joi.object({
        productName: Joi.string().required(),
        price: Joi.number().positive().required(),
        description: Joi.string().required(),
        image: Joi.string(), // Optional if image is handled elsewhere
    });

    return schema.validate(data);
};

export default productValidation;
