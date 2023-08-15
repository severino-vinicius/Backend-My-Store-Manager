const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { 
  mockServiceResBD,
  mockFromBD,
} = require('../mock/product.mock');

chai.use(sinonChai);

 describe('Realizando testes - Products Controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos os produtos', async function () {
    sinon.stub(productsService, 'findProductsServ').resolves(mockServiceResBD);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const req = {
      params: { id: null },
    };

    await productsController.findAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockFromBD);
  });
});