const camelize = require('camelize');
const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormattedQuery');

const allProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(products);
};

const productsById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(product);
};

const addNewProductModel = async (dataNewProduct) => {
const columns = getFormattedColumnNames(dataNewProduct);
const placeholders = getFormattedPlaceholders(dataNewProduct);

const query = `INSERT INTO products (${columns}) VALUE (${placeholders});`;

const [{ insertId }] = await connection.execute(query, [...Object.values(dataNewProduct)]);

return insertId;
};

module.exports = {
  allProducts,
  productsById,
  addNewProductModel,
};