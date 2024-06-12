const express = require('express');
const router = express.Router();
const confirmationController = require('../controllers/confirmationController');

router.post('/', confirmationController.getConfirmation);

module.exports = router;


