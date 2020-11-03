var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.redirect('http://localhost:4200/error');
});

module.exports = router;