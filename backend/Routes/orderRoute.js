const { createOrder } = require('../Controllers/orderController.js');

const express = require('express');

const router = express.Router();

router.post('/order',createOrder);

module.exports = router;