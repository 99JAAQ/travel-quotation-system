const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/resultsController');

router.get('/', resultsController.getSearchResults);

module.exports = router;
