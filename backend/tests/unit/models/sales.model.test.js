const { expect, assert } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const {
  mockAllSalesFromBD,
  mockAllSalesFromModel,
  mockSaleByIdFromBD,
  mockSaleByIdFromModel,
  mockInsertIdModel,
 } = require('../mock/sales.mock');

describe('Realizando testes - Sales Model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todas as sales', async function () {
    sinon.stub(connection, 'execute').resolves([[mockAllSalesFromBD]]);

    const product = await salesModel.allSalesModel();

    expect(product).to.be.deep.equal([mockAllSalesFromModel]);
  });

  it('Recuperando um produto pelo ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[mockSaleByIdFromBD]]);

    const inputData = 1;
    const product = await salesModel.salesByIdModel(inputData);

    expect(product).to.be.deep.equal([mockSaleByIdFromModel]);
  });

  it('Inserindo uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves(mockInsertIdModel);

    const sale = await salesModel.addNewSaleModel();

    expect(sale).to.equal(3);
  });

  it('Inserindo uma nova venda de produto', async function () {
    sinon.stub(connection, 'execute').onFirstCall().resolves(null).onSecondCall()
      .resolves(null);

    const salesId = 3;
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
    const sale = await salesModel.addNewSaleProductModel(salesId, inputData);

    assert.isOk(sale);
  });
});