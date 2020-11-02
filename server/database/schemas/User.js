const mongoose = require('mongoose');

module.exports = {
    LocalUser: new mongoose.Schema({
        email: String,
        password: String
    }),
    TwitterUser: new mongoose.Schema({
        id: String
    })
};
