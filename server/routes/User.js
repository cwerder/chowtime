var express = require('express')
var router = express.Router()
var secretRouter = require('./Secret')
var registerRouter = require('./Register')
var signInRouter = require('./SignIn')

router.use('/Secret', secretRouter)
router.use('/Register', registerRouter)
router.use('/SignIn', signInRouter)

module.exports = router