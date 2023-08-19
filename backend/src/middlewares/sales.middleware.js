const { checkValidation } = require('../utils/validateInput');
const { validateArraySchema } = require('../services/validation/schemas');

const checkProductId = (req, res, next) => {
  const { body } = req;
  const requireProperty = 'productId';
  const responseValidation = checkValidation(body, requireProperty);
  if (responseValidation) {
  return res.status(400).json({
    message: responseValidation,
  });
  }
  next();
};

const checkQuantity = (req, res, next) => {
  const { body } = req;
  const requireProperty = 'quantity';
  const responseValidation = checkValidation(body, requireProperty);
  if (responseValidation) {
  return res.status(400).json({
    message: responseValidation,
  });
  }
  const { error } = validateArraySchema.validate(body);

  if (error) {
    return res.status(422).json({
      message: '"quantity" must be greater than or equal to 1',
  });
  }
  next();
};

module.exports = {
  checkProductId,
  checkQuantity,
};