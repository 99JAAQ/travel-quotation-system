exports.getCustomization = (req, res) => {
    const quoteId = req.params.id;
    // Simular detalles de la cotización
    const quote = {
      id: quoteId,
      destination: 'Destino A',
      price: '$1000',
      flightDetails: 'Vuelo directo, 5h',
      accommodation: 'Hotel 4 estrellas',
      carRental: 'Compacto, $50/día'
    };
    res.render('customization/customization', { quote });
  };
  