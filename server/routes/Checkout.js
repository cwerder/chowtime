var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    if (!req.session.count) {
        req.session.count = 1;
    } else {
        req.session.count++;
    }
    console.log('visitor', req.session);
    // TODO: add payment processing via stripe
    // clear session shopping cart if payment is successful
    res.json('success');
});


module.exports = router;