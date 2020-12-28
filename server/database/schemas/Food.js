const mongoose = require('mongoose');

module.exports = {
    Food: new mongoose.Schema({
        name: string,
        description: string,
        count: number,
        image: string,
        price: number
    })
};