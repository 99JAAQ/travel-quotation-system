exports.getSummary = (req, res) => {
    const { quoteId, insurance, transfers, activities } = req.body;
    // Simular resumen de la cotización
    const summary = {
      id: quoteId,
      destination: 'Destino A',
      price: '$1000',
      flightDetails: 'Vuelo directo, 5h',
      accommodation: 'Hotel 4 estrellas',
      carRental: 'Compacto, $50/día',
      insurance: insurance,
      transfers: transfers,
      activities: activities
    };
    res.render('summary/summary', { summary });
  };
  