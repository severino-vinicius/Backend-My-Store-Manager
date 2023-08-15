const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const {
  mockAllSalesFromBD,
  mockAllSalesServ,
  mockSaleByIdFromBD,
  mockSaleServById,
  mockWrongStatusServ,
  mockSaleNotFound } = require('../mock/sales.mock');

chai.use(sinonChai);

describe('Realizando testes - Sales Controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todas as sales', async function () {
    sinon.stub(salesService, 'allSalesServ').resolves(mockAllSalesServ);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const req = {
      params: { id: null },
    };

    await salesController.allSalesController(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockAllSalesFromBD);
  });

  it('Recuperando a sale pelo Id com sucesso', async function () {
    sinon.stub(salesService, 'salesByIdService').resolves(mockSaleServById);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const req = {
      params: { id: 1 },
    };

    await salesController.salesByIdController(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockSaleByIdFromBD);
  });

  it('Recuperando a sale pelo Id sem sucesso', async function () {
    sinon.stub(salesService, 'salesByIdService').resolves(mockWrongStatusServ);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const req = {
      params: { id: 777 },
    };

    await salesController.salesByIdController(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(mockSaleNotFound);
  });
});