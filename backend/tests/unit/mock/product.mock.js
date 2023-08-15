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

  module.exports = {
    mockFromBD,
    mockFromModel,
    mockProductFromBD,
    mockProductFromModel,
    mockWrongIdFromBD,
    mockWrongIdFromModel,
    mockServiceResBD,
  };