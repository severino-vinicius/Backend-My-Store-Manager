const { salesModel, productsModel } = require('../models');

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

const addNewSaleProductServ = async (dataNewSales) => {
  const checkProductId = dataNewSales.map(({ productId }) => {
    const responseProduct = productsModel.productsById(productId);
    return responseProduct;
  });
  const responsePromise = await Promise.all(checkProductId);
  const validateProductId = responsePromise.some((product) => product === undefined);
  if (validateProductId) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  const saleId = await salesModel.addNewSaleModel();

  await salesModel.addNewSaleProductModel(saleId, dataNewSales);

  const response = { id: saleId, itemsSold: dataNewSales };
  return { status: 201, data: response };
};

module.exports = {
  allSalesServ,
  salesByIdService,
  addNewSaleProductServ,
};