const mongoose = require('mongoose');

module.exports = {
    Food: new mongoose.Schema({
        name: String,
        description: String,
        count: Number,
        image: String,
        price: Number
    })
};