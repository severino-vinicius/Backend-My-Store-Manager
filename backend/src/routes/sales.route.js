const route = require('express').Router();
const { salesController } = require('../controllers');

route.get('/', salesController.allSalesController);

route.get('/:salesId', salesController.salesByIdController);

module.exports = route;