const route = require('express').Router();
const { productsController } = require('../controllers');

route.get('/', productsController.findAllProducts);
route.get('/:productId', productsController.findProductById);

route.post('/', productsController.addNewProductController);

module.exports = route;