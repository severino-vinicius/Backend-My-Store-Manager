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
});