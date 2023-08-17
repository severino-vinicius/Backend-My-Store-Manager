const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { 
  mockFromModel,
  mockFromBD,
  mockProductFromBD,
  mockProductFromModel,
  mockWrongIdFromBD,
  mockWrongIdFromModel,
  mockInsertIdFromBD,
  mockModelInsertIdFromModel,
 } = require('../mock/product.mock');

describe('Realizando testes - Products Model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos os produtos do BD', async function () {
    sinon.stub(connection, 'execute').resolves([mockFromBD]);

    const product = await productsModel.allProducts();

    expect(product).to.be.deep.equal(mockFromModel);
  });

  it('Recuperando um produto pelo ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[mockProductFromBD]]);

    const inputData = 1;
    const product = await productsModel.productsById(inputData);

    expect(product).to.be.deep.equal(mockProductFromModel);
  });

  it('Recuperando um produto pelo ID sem sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[mockWrongIdFromBD]]);

    const inputData = 777;
    const product = await productsModel.productsById(inputData);

    expect(product).to.be.deep.equal(mockWrongIdFromModel);
  });

  it('Inserindo um novo produto', async function () {
    // const [{ insertId }] = mockInsertIdFromBD;
    sinon.stub(connection, 'execute').resolves(mockInsertIdFromBD);
    
    const inputData = {
      name: 'ProdutoX',
    };

    const responseProduct = await productsModel.addNewProductModel(inputData);

    expect(responseProduct).to.be.equal(mockModelInsertIdFromModel);
  });
});