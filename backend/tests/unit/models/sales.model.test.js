const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const {
  mockAllSalesFromBD,
  mockAllSalesFromModel,
  mockSaleByIdFromBD,
  mockSaleByIdFromModel,
 } = require('../mock/product.mock');

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
});