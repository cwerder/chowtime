var NewUser = require('../database/models');
var toToken = require('../helpers').toJWT;

module.exports = {
    signIn: (req, res) => {
        console.log('hit SignIn controller');

        let query = NewUser.where({
            'email': req.body.email,
            'password': req.body.password
        });

        query.findOne((err, user) => {
            if (err) {
                res.sendStatus(500);
            } else if (!user) {
                res.sendStatus(404);
            } else {
                res.send(toToken(user.toJSON()));
            }
        });
    }
}