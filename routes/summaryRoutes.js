const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController');

router.post('/', summaryController.getSummary);

module.exports = router;
