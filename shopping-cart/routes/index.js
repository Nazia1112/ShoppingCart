var express = require('express');
var router = express.Router();
var passport = require('passport');
var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(i=0; i< docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i+chunkSize))
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });

  });
});
module.exports = router;
