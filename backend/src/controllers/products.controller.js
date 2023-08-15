const { productsService } = require('../services');

const findAllProducts = async (req, res) => {
  const response = await productsService.findProductsServ();
  return res.status(response.status).json(response.data);
};

const findProductById = async (req, res) => {
  const { productId } = req.params;
  const { status, data } = await productsService.findProductByIdServ(productId);
  return res.status(status).json(data);
};

module.exports = {
  findAllProducts,
  findProductById,
};