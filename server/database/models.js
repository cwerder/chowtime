const mongoose = require('mongoose');
const userSchema = require('./schemas/User').LocalUser;
const twitterUserSchema = require('./schemas/User').TwitterUser;

module.exports = {
    LocalUserModel: mongoose.model('user', userSchema),
    TwitterUserModel: mongoose.model('twitterUser', twitterUserSchema)
}
