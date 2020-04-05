var verifyJWT = require('../helpers').verifyJWT;

module.exports = {
    secret: (req, res) => {
        console.log('hit secret controller');

        try {
            verifyJWT(req.headers.authorization);
            res.sendStatus(200);
        } catch (err) {
            res.sendStatus(401);
        }
    }
}