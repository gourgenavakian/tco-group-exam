const Joi = require('joi');


const userValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
        .messages({ 'any.only': 'Passwords do not match' }),
    fullName: Joi.string().required(),
    gender: Joi.string().valid('male', 'female').required(),
    city: Joi.string().optional(),
    country: Joi.string().optional(),
    card: Joi.object({
        type: Joi.string().valid('visa', 'mastercard', 'apex').optional(),
        cvc: Joi.string().length(3).required(),
        creditCardNumber: Joi.string().creditCard().required(),
        expirationDate: Joi.object().optional()
            .messages({ 'string.pattern.base': 'Expiration date must be in format MM/YYYY' })
    }).optional(),
    role: Joi.string().valid('admin', 'user', 'manager').required(),
    createdAt: Joi.date().optional(),
    isActive: Joi.boolean().optional()
});

module.exports = { userValidationSchema };