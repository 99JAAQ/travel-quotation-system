const express = require('express');
const router = express.Router();
const quoteDetailsController = require('../controllers/quoteDetailsController');

router.get('/:id', quoteDetailsController.getQuoteDetails);

module.exports = router;
