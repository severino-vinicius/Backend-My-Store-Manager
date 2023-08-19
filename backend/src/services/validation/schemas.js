const Joi = require('joi');

const validateArraySchema = Joi.array().items(
  Joi.object({
    productId: Joi.number().min(1),
    quantity: Joi.number().min(1),
  }),
);

module.exports = {
  validateArraySchema,
};