var mongoose = require('mongoose');
// var NewUser = require('./models');

const uri = process.env.ENVIRONMENT === 'DEV' ?
  `localhost:${process.env.DB_PORT_LOCAL}` :
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@chowtimecluster-h0ntn.azure.mongodb.net/test?retryWrites=true&w=majority`;
console.log('uri', uri);
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected via mongoose!');
});