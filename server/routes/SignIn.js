var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('local-login'),
        function(req, res) {
            // consider doing a redirect instead of send
            res.cookie('authorization', req.user).json(req.user);
        });

module.exports = router;