const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    email: String,
    password: String,
    confirm_password: String
});
