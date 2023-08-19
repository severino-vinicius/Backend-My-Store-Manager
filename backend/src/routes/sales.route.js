const route = require('express').Router();
const { salesController } = require('../controllers');
const { checkProductId, checkQuantity } = require('../middlewares/sales.middleware');

route.get('/', salesController.allSalesController);

route.get('/:salesId', salesController.salesByIdController);

route.post('/', checkProductId, checkQuantity, salesController.addNewSaleProductController);

module.exports = route;