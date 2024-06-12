const express = require('express');
const router = express.Router();
const customizationController = require('../controllers/customizationController');

router.get('/:id', customizationController.getCustomization);

module.exports = router;
