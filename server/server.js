const express = require('express')
const morgan = require('morgan')
var cors = require('cors')
var cookieParser = require('cookie-parser');
const app = express()
require('dotenv').config()
const passport = require('passport');
require('./passport');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(passport.initialize());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

// initialize routing
var userRouter = require('./routes/user');
var successRouter = require('./routes/success');
var errorRouter = require('./routes/error');

// initialize middleware
var timeLoggerMiddleware = require('./middleware/TimeLogger');
app.use(morgan('combined'))

// link middleware
app.use(timeLoggerMiddleware)

// link routers
app.use('/user', userRouter)
app.use('/success', successRouter)
app.use('/error', errorRouter)

// initiate connection to db
require('./database/InitializeDB');

app.listen(process.env.APP_PORT, () => console.log(`Example app listening on port ${process.env.APP_PORT}!`))