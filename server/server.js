const express = require('express')
const morgan = require('morgan')
var cors = require('cors')
var cookieParser = require('cookie-parser');
const app = express()
require('dotenv').config()
const passport = require('passport');
require('./passport');
const session = require('express-session');
const path = require('path');
const MongoStore = require('connect-mongo')(session);

const dbConnect = require('./database/InitializeDB');

app.use(cors({credentials: true, origin: 'http://localhost:4200'})); // I don't think you need this anymore.

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
// TODO: prevent creation of new session if user is already authenticated.
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.TWITTER_CONSUMER_SECRET,
    store: new MongoStore({ mongooseConnection: dbConnect }),
    cookie: {
      secure: false
    }
  }));
app.use(passport.initialize());

// initialize routing
var userRouter = require('./routes/user');
var successRouter = require('./routes/success');
var errorRouter = require('./routes/error');
var oauthRouter = require('./routes/oauth');
var foodRouter = require('./routes/menu');
var checkoutRouter = require('./routes/checkout');
var cartRouter = require('./routes/cart');

// initialize middleware
var timeLoggerMiddleware = require('./middleware/TimeLogger');
app.use(morgan('combined'))

// link middleware
app.use(timeLoggerMiddleware)

// link routers
app.use('/user', userRouter)
app.use('/success', successRouter)
app.use('/error', errorRouter)
app.use('/oauth', oauthRouter)
app.use('/menu', foodRouter)
app.use('/cart', cartRouter)
app.use('/checkout', checkoutRouter)

// serve the angular app
if (process.env.ENVIRONMENT !== 'DEV') {
  var reqPath = path.join(__dirname, '../');
  app.use(express.static(reqPath + "/client/dist/client"));
  app.get('*', (_, res) => {
    res.sendFile(reqPath + "/client/dist/client/index.html");
  });
}

app.listen(process.env.APP_PORT, () => console.log(`Example app listening on port ${process.env.APP_PORT}!`))