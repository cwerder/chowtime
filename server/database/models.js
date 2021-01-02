const mongoose = require('mongoose');
const userSchema = require('./schemas/User').LocalUser;
const twitterUserSchema = require('./schemas/User').TwitterUser;
const foodSchema = require('./schemas/Food');

module.exports = {
    LocalUserModel: mongoose.model('user', userSchema),
    TwitterUserModel: mongoose.model('twitterUser', twitterUserSchema),
    FoodModel: mongoose.model('food', foodSchema, 'food')
}
