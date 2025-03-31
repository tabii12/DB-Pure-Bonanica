var express = require('express');
var router = express.Router();

const { getAllProducts } = require('../controllers/productController');

router.get('/', getAllProducts)

module.exports = router;
