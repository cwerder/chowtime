var express = require('express');
var router = express.Router();

var cartController = require('../controllers/cart');

router.post('/addtocart', (req, res) => {
    cartController.addToCart(req);
    res.json('ok');
});

module.exports = router;