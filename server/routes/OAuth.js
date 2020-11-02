var express = require('express');
var router = express.Router();
var twitterRouter = require('./Twitter');

router.use('/twitter', twitterRouter);

module.exports = router;