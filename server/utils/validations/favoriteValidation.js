import Joi from 'joi';

const favoriteValidation = (data) => {
    const schema = Joi.object({
        productId: Joi.string().required(),
        userId: Joi.string().required(),  // Assuming userId is passed in the request
    });

    return schema.validate(data);
};

export default favoriteValidation;
