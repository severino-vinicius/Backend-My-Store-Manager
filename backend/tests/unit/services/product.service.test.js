const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { 
  mockFromBD,
  mockProductFromBD,
  mockWrongIdFromBD,
 } = require('../mock/product.mock');

 describe('Realizando testes - Products Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos os produtos', async function () {
    sinon.stub(productsModel, 'allProducts').resolves([mockFromBD]);

    const responseService = await productsService.findProductsServ();
    expect(responseService.status).to.be.equal(200);
    expect(responseService.data).to.be.deep.equal([mockFromBD]);
  });

  it('Recuperando um produto pela Id com sucesso', async function () {
    sinon.stub(productsModel, 'productsById').resolves([mockProductFromBD]);

    const productId = 1;

    const responseService = await productsService.findProductByIdServ(productId);
    expect(responseService.status).to.be.equal(200);
    expect(responseService.data).to.be.deep.equal([mockProductFromBD]);
  });

  it('Recuperando um produto pela Id sem sucesso', async function () {
    sinon.stub(productsModel, 'productsById').resolves(undefined);

    const productId = 777;

    const responseService = await productsService.findProductByIdServ(productId);
    expect(responseService.status).to.be.equal(404);
    expect(responseService.data).to.be.deep.equal(mockWrongIdFromBD);
  });
});