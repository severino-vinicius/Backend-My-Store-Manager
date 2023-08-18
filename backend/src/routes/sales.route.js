const route = require('express').Router();
const { salesController } = require('../controllers');

route.get('/', salesController.allSalesController);

route.get('/:salesId', salesController.salesByIdController);

route.post('/', salesController.addNewSaleProductController);

module.exports = route;