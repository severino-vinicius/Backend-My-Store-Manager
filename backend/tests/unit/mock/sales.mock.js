const mockDate = '2023-08-15T04:01:18.000Z';

const mockAllSalesFromBD = [
  {
    salesId: 1,
    date: mockDate,
    productId: 1,
    quantity: 5,
  },
  {
    salesId: 1,
    date: mockDate,
    productId: 2,
    quantity: 10,
  },
  {
    salesId: 2,
    date: mockDate,
    productId: 3,
    quantity: 15,
  },
];

const mockAllSalesFromModel = [
  {
    salesId: 1,
    date: mockDate,
    productId: 1,
    quantity: 5,
  },
  {
    salesId: 1,
    date: mockDate,
    productId: 2,
    quantity: 10,
  },
  {
    salesId: 2,
    date: mockDate,
    productId: 3,
    quantity: 15,
  },
];

const mockSaleByIdFromBD = [
  {
    date: '2023-08-15T20:56:28.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-08-15T20:56:28.000Z',
    productId: 2,
    quantity: 10,
  },
];

const mockSaleByIdFromModel = [
  {
    date: '2023-08-15T20:56:28.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-08-15T20:56:28.000Z',
    productId: 2,
    quantity: 10,
  },
];

const mockNoIdResolve = [];

const mockAllSalesServ = {
  status: 200,
  data: mockAllSalesFromBD,
};

const mockSaleServById = {
  status: 200,
  data: mockSaleByIdFromBD,
};

const mockSaleNotFound = {
  message: 'Sale not found',
};

const mockWrongStatusServ = {
  status: 404,
  data: mockSaleNotFound,
};

const mockAddNewSaleFromBD = {
  status: 201,
  data: {
    id: 3,
    itemsSold: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 5 },
    ],
  },
};

const mockAddNewSaleFromModel = {
    id: 3,
    itemsSold: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ],
  };

const mockInsertId = 3;

const mockInsertIdModel = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 3,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

module.exports = {
  mockAllSalesFromModel,
  mockAllSalesFromBD,
  mockAllSalesServ,
  mockSaleByIdFromBD,
  mockSaleByIdFromModel,
  mockSaleServById,
  mockWrongStatusServ,
  mockSaleNotFound,
  mockNoIdResolve,
  mockAddNewSaleFromBD,
  mockAddNewSaleFromModel,
  mockInsertId,
  mockInsertIdModel,
};