var NewUser = require('../database/models');

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
                console.log('user!', user);
                res.sendStatus(200);
            }
        });
    }
}