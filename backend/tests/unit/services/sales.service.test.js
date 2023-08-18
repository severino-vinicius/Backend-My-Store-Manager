const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const {
  mockAllSalesFromBD,
  mockAllSalesFromModel,
  mockSaleByIdFromBD,
  mockSaleByIdFromModel,
  mockNoIdResolve,
  mockSaleNotFound,
  mockInsertId,
  mockAddNewSaleFromModel,
 } = require('../mock/sales.mock');

describe('Realizando testes - Sales Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todas as sales', async function () {
    sinon.stub(salesModel, 'allSalesModel').resolves([mockAllSalesFromBD]);

    const responseService = await salesService.allSalesServ();

    expect(responseService.status).to.be.equal(200);
    expect(responseService.data).to.be.deep.equal([mockAllSalesFromModel]);
  });

  it('Recuperando sale pelo Id com sucesso', async function () {
    sinon.stub(salesModel, 'salesByIdModel').resolves([mockSaleByIdFromBD]);

    const productId = 1;
    const responseService = await salesService.salesByIdService(productId);
    
    expect(responseService.status).to.be.equal(200);
    expect(responseService.data).to.be.deep.equal([mockSaleByIdFromModel]);
  });

  it('Recuperando sale pelo Id sem sucesso', async function () {
    sinon.stub(salesModel, 'salesByIdModel').resolves(mockNoIdResolve);

    const productId = 777;
    const responseService = await salesService.salesByIdService(productId);
    
    expect(responseService.status).to.be.equal(404);
    expect(responseService.data).to.be.deep.equal(mockSaleNotFound);
  });

  it('Inserindo uma nova venda', async function () {
    sinon.stub(salesModel, 'addNewSaleModel').resolves(mockInsertId);
    sinon.stub(salesModel, 'addNewSaleProductModel').resolves(null);

    const inputData = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];

    const responseService = await salesService.addNewSaleProductServ(inputData);
    expect(responseService.status).to.be.equal(201);
    expect(responseService.data).to.be.deep.equal(mockAddNewSaleFromModel);
  });
});