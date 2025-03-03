const { getProduct, getSingleProduct } = require('../Controllers/productController.js');

const express = require('express');

const router = express.Router();

router.get('/product',getProduct);
router.get('/product/:id',getSingleProduct);

module.exports= router;