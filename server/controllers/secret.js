// var NewUser = require('../database/models');

module.exports = {
    secret: (req, res) => {
        console.log('hit secret controller');

        res.send('secret');
    }
}