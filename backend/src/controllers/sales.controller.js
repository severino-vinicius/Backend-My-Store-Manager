const { salesService } = require('../services');

const allSalesController = async (req, res) => {
  const { status, data } = await salesService.allSalesServ();
  return res.status(status).json(data);
};

const salesByIdController = async (req, res) => {
  const { salesId } = req.params;
  const { status, data } = await salesService.salesByIdService(salesId);
  return res.status(status).json(data);
};

const addNewSaleProductController = async (req, res) => {
  const dataNewSales = req.body;
  const { status, data } = await salesService.addNewSaleProductServ(dataNewSales);

  return res.status(status).json(data);
};

module.exports = {
  allSalesController,
  salesByIdController,
  addNewSaleProductController,
};