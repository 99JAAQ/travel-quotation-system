exports.getConfirmation = (req, res) => {
    const { name, email, payment, quoteId } = req.body;
    // Simular confirmación de la reserva
    const confirmation = {
      reservationNumber: 'ABC12345',
      name: name,
      email: email,
      payment: payment,
      quoteId: quoteId
    };
    res.render('confirmation/confirmation', { confirmation });
  };
  