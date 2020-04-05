var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('local-login',
                {successRedirect: '/success',
                failureRedirect: '/error'}))

module.exports = router;