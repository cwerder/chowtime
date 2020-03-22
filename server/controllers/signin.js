var NewUser = require('../database/models');

module.exports = {
    signIn: (req, res) => {
        console.log('hit SignIn controller');

        res.sendStatus(200);
    }
}