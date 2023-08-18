const camelize = require('camelize');
const connection = require('./connection');
// const {
//   getFormattedColumnNames,
//   getFormattedPlaceholders,
// } = require('../utils/generateFormattedQuery');

const allSalesModel = async () => {
  const [sales] = await connection.execute(
`SELECT
  s.id AS saleId,
  s.date,
  p.product_id,
  p.quantity
FROM
  sales AS s
INNER JOIN
  sales_products AS p ON s.id = p.sale_id
ORDER BY
  s.id ASC,
  p.product_id ASC;`,
  );

return camelize(sales);
};

const salesByIdModel = async (salesId) => {
  const [sales] = await connection.execute(
`SELECT 
  s.date,
  p.product_id,
  p.quantity
FROM
  sales AS s
INNER JOIN
  sales_products AS p ON s.id = p.sale_id
WHERE
  s.id = ?
ORDER BY
  s.id ASC,
  p.product_id ASC;`,
  [salesId],
  );

return camelize(sales);
};

const addNewSaleModel = async () => {
  const queryAddSale = 'INSERT INTO sales (date) VALUE (now());';
  const [{ insertId }] = await connection.execute(queryAddSale);
  console.log(insertId);
  return camelize(insertId);
};

const addNewSaleProductModel = async (salesId, dataNewSales) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?);';
  const promise = dataNewSales.map(async (sale) => {
    await connection.execute(query, [salesId, sale.productId, sale.quantity]);
  });
  await Promise.all(promise);
  return true;
};

module.exports = {
  allSalesModel,
  salesByIdModel,
  addNewSaleModel,
  addNewSaleProductModel,
};