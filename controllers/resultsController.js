exports.getSearchResults = (req, res) => {
    const { destination, dates, passengers, preferences } = req.query;
    // Simular resultados de búsqueda
    const results = [
      {
        id: 1,
        destination: 'Destino A',
        price: '$1000',
        flightDetails: 'Vuelo directo, 5h',
        accommodation: 'Hotel 4 estrellas',
        carRental: 'Compacto, $50/día'
      },
      {
        id: 2,
        destination: 'Destino B',
        price: '$1500',
        flightDetails: '1 escala, 10h',
        accommodation: 'Hotel 5 estrellas',
        carRental: 'SUV, $80/día'
      }
    ];
    res.render('results/searchResults', { results });
  };
  