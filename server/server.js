const express = require('express')
const app = express()
const port = 3000

// initialize routing
var userRouter = require('./routes/user');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// initialize middleware
var timeLoggerMiddleware = require('./middleware/TimeLogger');

// link middleware
app.use(timeLoggerMiddleware)

// link routers
app.use('/user', userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))