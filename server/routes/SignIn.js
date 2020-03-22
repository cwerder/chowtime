var express = require('express');
var router = express.Router();
var signInController = require('../controllers/signin');

router.post('/', signInController.signIn);

module.exports = router;