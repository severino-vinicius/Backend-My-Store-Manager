const { salesModel } = require('../models');

const allSalesServ = async () => {
  const response = await salesModel.allSalesModel();
  return { status: 200, data: response };
};

const salesByIdService = async (salesId) => {
  const response = await salesModel.salesByIdModel(salesId);

  if (response.length === 0) {
    return { status: 404, data: { message: 'Sale not found' } };
  }

  return { status: 200, data: response };
};

module.exports = {
  allSalesServ,
  salesByIdService,
};