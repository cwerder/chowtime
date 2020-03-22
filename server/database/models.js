const mongoose = require('mongoose');
const registerSchema = require('./schemas/register');

module.exports = mongoose.model('register', registerSchema);
