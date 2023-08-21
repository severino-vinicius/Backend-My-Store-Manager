const route = require('express').Router();
const { productsController } = require('../controllers');
const { checkName } = require('../middlewares/products.middleware');

route.get('/', productsController.findAllProducts);
route.get('/:productId', productsController.findProductById);

route.post('/', checkName, productsController.addNewProductController);

route.put('/:productId', checkName, productsController.updateByIdController);

module.exports = route;