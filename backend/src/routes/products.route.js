const route = require('express').Router();
const { productsController } = require('../controllers');
const { checkName } = require('../middlewares/products.middleware');

route.get('/', productsController.findAllProducts);
route.get('/:productId', productsController.findProductById);

route.post('/', checkName, productsController.addNewProductController);

module.exports = route;