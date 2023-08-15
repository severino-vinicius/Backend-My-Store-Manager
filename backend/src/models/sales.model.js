const camelize = require('camelize');
const connection = require('./connection');

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

module.exports = {
  allSalesModel,
  salesByIdModel,
};