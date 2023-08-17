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

const addNewProductServ = async (dataNewProduct) => {
  const insertedId = await productsModel
    .addNewProductModel(dataNewProduct);

  const newProductAdded = await productsModel.productsById(insertedId);

  return { status: 201, data: newProductAdded };
};

module.exports = {
  findProductsServ,
  findProductByIdServ,
  addNewProductServ,
};