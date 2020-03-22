const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config()

// initialize routing
var userRouter = require('./routes/user');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// initialize middleware
var timeLoggerMiddleware = require('./middleware/TimeLogger');
app.use(morgan('combined'))

// link middleware
app.use(timeLoggerMiddleware)

// link routers
app.use('/user', userRouter)

// initiate connection to db
require('./database/InitializeDB');

app.listen(process.env.APP_PORT, () => console.log(`Example app listening on port ${process.env.APP_PORT}!`))