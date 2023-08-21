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

const updateByIdServ = async (productData, productId) => {
  const validateProductId = await productsModel.productsById(productId);
  if (!validateProductId) {
    return { status: 404, data: { message: 'Product not found' } };
  }
  await productsModel.updateByIdModel(productData, productId);
  
  const productUpdated = await productsModel.productsById(productId);

  return { status: 200, data: productUpdated };
};

module.exports = {
  findProductsServ,
  findProductByIdServ,
  addNewProductServ,
  updateByIdServ,
};