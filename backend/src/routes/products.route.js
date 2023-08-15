const route = require('express').Router();
const { productsController } = require('../controllers');

route.get('/', productsController.findAllProducts);
route.get('/:productId', productsController.findProductById);

module.exports = route;