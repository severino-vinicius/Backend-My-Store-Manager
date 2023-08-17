const { expect } = require('chai');
const sinon = require('sinon');
const {
  mockErroMensNameRequire,
  mockErroMensNameMoreFiveChar,
 } = require('../mock/middleware.mock');
const { checkName } = require('../../../src/middlewares/products.middleware');

describe('Realizando testes - Products Middleware', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Validando dados da requisição - Dados ok', function () {
  const req = {
    body: {
      name: 'ProdutoX',
    },
  };

  const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

  const next = sinon.stub().returns();

  checkName(req, res, next);

  expect(next).to.have.been.calledWith();
  });

  it('Validando dados da requisição - Dados não ok', function () {
    const req = {
      body: {
        name: null,
      },
    };
  
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
  
    const next = sinon.stub().returns();
  
    checkName(req, res, next);
  
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(mockErroMensNameRequire);
    });

    it('Validando dados da requisição - Dados name menos que 5 chars', function () {
      const req = {
        body: {
          name: 'Prod',
        },
      };
    
      const res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub(),
        };
    
      const next = sinon.stub().returns();
    
      checkName(req, res, next);
    
      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith(mockErroMensNameMoreFiveChar);
      });
});