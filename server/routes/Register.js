var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/', passport.authenticate('local-register'),
                function(req, res) {
                    // consider doing a redirect instead of send
                    res.cookie('authorization', req.user).json(req.user);
                });

module.exports = router;