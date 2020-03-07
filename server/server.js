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

const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
console.log('env', process.env.ENVIRONMENT);
const uri = process.env.ENVIRONMENT === 'DEV' ?
  `localhost:${process.env.DB_PORT_LOCAL}` :
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@chowtimecluster-h0ntn.azure.mongodb.net/test?retryWrites=true&w=majority`;
console.log('uri', uri);
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected via mongoose!')

  let registerSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirm_password: String
  });

  let User = mongoose.model('register', registerSchema);

  let user1 = new User({ email: 'a', password: 'x', confirm_password: 'x'});

  user1.save((error, user) => {
    if (error) {
      return console.error(error);
    }
    console.log('user successfully added:', user);
  });
});

app.listen(process.env.APP_PORT, () => console.log(`Example app listening on port ${process.env.APP_PORT}!`))