var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/', passport.authenticate('local-register',
                {successRedirect: '/success',
                failureRedirect: '/error'}))

module.exports = router;