var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.cookie('authorization', req.user).redirect('http://localhost:4200');
})

module.exports = router;