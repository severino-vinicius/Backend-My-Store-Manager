const { productsModel } = require('../models/index');

const findProductsServ = async () => {
  const response = await productsModel.allProducts();
  return { status: 200, data: response };
};

const findProductByIdServ = async (productId) => {
  const response = await productsModel.productsById(productId);
  if (!response) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  return { status: 200, data: response };
};

module.exports = {
  findProductsServ,
  findProductByIdServ,
};