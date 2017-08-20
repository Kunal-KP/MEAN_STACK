var express = require('express');
var router = express.Router();
var path = require('path');
var configs = require('../configs');
var proxy = require('../proxy-layer')
var MongoClient = require('mongodb').MongoClient;
var dbUrl = configs.dbCon.url;

router.get('/', proxy.home);
router.get('/products', proxy.products);
router.get('/productsPage', proxy.productsPage);
module.exports = router;