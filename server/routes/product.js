const express = require('express');
const router = express.Router();
const {getProducts, createProduct} = require('../controllers/ProductsController');

/* GET home page. */
router.get('/', getProducts);

router.post('/', createProduct);

module.exports = router;
