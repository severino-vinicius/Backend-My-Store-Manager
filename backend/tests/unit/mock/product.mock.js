const mockFromBD = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do CapitÃ£o AmÃ©rica',
    },
  ];

  const mockFromModel = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do CapitÃ£o AmÃ©rica',
    },
  ];

  const mockProductFromBD = {
    id: 1,
    name: 'Martelo de Thor',
  };

  const mockProductFromModel = {
    id: 1,
    name: 'Martelo de Thor',
  };

  const mockWrongIdFromBD = {
    message: 'Product not found',
  };

  const mockWrongIdFromModel = {
    message: 'Product not found',
  };

  const mockServiceResBD = {
    status: 200,
    data: mockFromBD,
  };

  const mockFindProductByIdServ = {
    status: 200,
    data: mockProductFromBD,
  };

  const mockDataNewProduct = { id: 5, name: 'ProdutoX' };

  const mockAddNewProductBD = { 
    status: 201, data: mockDataNewProduct,
  };

  const mockInsertIdFromBD = [
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 4,
      info: '',
      serverStatus: 2,
      warningStatus: 0,
    },
    undefined,
  ];

  const mockInsertNewProductFromBD = {
    id: 4,
    name: 'ProdutoX',
  };

  const mockModelInsertIdFromModel = 4;

  module.exports = {
    mockFromBD,
    mockFromModel,
    mockProductFromBD,
    mockProductFromModel,
    mockWrongIdFromBD,
    mockWrongIdFromModel,
    mockServiceResBD,
    mockAddNewProductBD,
    mockDataNewProduct,
    mockFindProductByIdServ,
    mockInsertIdFromBD,
    mockInsertNewProductFromBD,
    mockModelInsertIdFromModel,
  };