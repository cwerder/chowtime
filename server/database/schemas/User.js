const mongoose = require('mongoose');

module.exports = {
    LocalUser: new mongoose.Schema({
        email: String,
        password: String,
        sessions: [String]
    }),
    TwitterUser: new mongoose.Schema({
        twitter_profile_id: String
    })
};
