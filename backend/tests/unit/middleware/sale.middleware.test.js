const { expect } = require('chai');
const sinon = require('sinon');

const { 
  checkProductId, 
  checkQuantity,
} = require('../../../src/middlewares/sales.middleware');

describe('Realizando testes - Sales Middleware', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Validando dados da requisição - Dado productId ok', function () {
    const req = {
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
        {
          productId: 3,
          quantity: 4,
        },
      ],
    };
  
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
  
    const next = sinon.stub().returns();
  
    checkProductId(req, res, next);
  
    expect(next).to.have.been.calledWith();
    });

    it('Validando dados da requisição - productId inexistente', function () {
      const req = {
        body: [
          {
            quantity: 1,
          },
          {
            productId: 2,
            quantity: 5,
          },
          {
            productId: 3,
            quantity: 4,
          },
        ],
      };

      const mock = { message: '"productId" is required' };
    
      const res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub(),
        };
    
      const next = sinon.stub().returns();
    
      checkProductId(req, res, next);
    
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith(mock);
      });

      it('Validando dados da requisição - Dado quantity ok', function () {
        const req = {
          body: [
            {
              productId: 1,
              quantity: 1,
            },
            {
              productId: 2,
              quantity: 5,
            },
            {
              productId: 3,
              quantity: 4,
            },
          ],
        };
      
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
          };
      
        const next = sinon.stub().returns();
      
        checkQuantity(req, res, next);
      
        expect(next).to.have.been.calledWith();
        });

      it('Validando dados da requisição - quantity inexistente', function () {
        const req = {
          body: [
            {
              productId: 1,
            },
            {
              productId: 2,
              quantity: 5,
            },
            {
              productId: 3,
              quantity: 4,
            },
          ],
        };
  
        const mock = { message: '"quantity" is required' };
      
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
          };
      
        const next = sinon.stub().returns();
      
        checkQuantity(req, res, next);
      
        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith(mock);
        });

        it('Validando dados da requisição - quantity 0', function () {
          const req = {
            body: [
              {
                productId: 1,
                quantity: 0,
              },
              {
                productId: 2,
                quantity: 5,
              },
              {
                productId: 3,
                quantity: 4,
              },
            ],
          };
    
          // const mock = { message: '"quantity" must be greater than or equal to 1' };
        
          const res = {
              status: sinon.stub().returnsThis(),
              json: sinon.stub(),
            };
        
          const next = sinon.stub().returns();
        
          checkQuantity(req, res, next);
        
          expect(next).not.to.have.been.calledWith();
          });
});