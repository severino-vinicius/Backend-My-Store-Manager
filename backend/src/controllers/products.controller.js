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

const addNewProductController = async (req, res) => {
  const dataNewProduct = req.body;
  const { status, data } = await productsService.addNewProductServ(dataNewProduct);
  return res.status(status).json(data);
};

const updateByIdController = async (req, res) => {
  const productData = req.body;
  const { productId } = req.params;

  const { status, data } = await productsService.updateByIdServ(productData, productId);
  return res.status(status).json(data);
};

module.exports = {
  findAllProducts,
  findProductById,
  addNewProductController,
  updateByIdController,
};