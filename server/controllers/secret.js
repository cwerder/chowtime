var verifyJWT = require('../helpers').verifyJWT;

module.exports = {
    secret: (req, res) => {
        console.log('hit secret controller');
        try {
            verifyJWT(req.cookies.authorization);
            res.set('authorization', req.cookies.authorization).json(200);
        } catch (err) {
            res.sendStatus(401);
        }
    }
}