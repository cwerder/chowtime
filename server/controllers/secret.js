var verifyJWT = require('../helpers').verifyJWT;
var stuff = require('../helpers').headerValueParser;

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