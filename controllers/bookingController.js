exports.getBooking = (req, res) => {
    const quoteId = req.body.quoteId;
    res.render('booking/booking', { booking: { quoteId } });
  };
  