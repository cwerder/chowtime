var express = require('express');
var router = express.Router();
var secretController = require('../controllers/secret');

router.get('/', secretController.secret);

module.exports = router;