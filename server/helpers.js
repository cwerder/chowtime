var jwt = require('jsonwebtoken');

let helper = module.exports = {
    toJWT: (document) => {
        return jwt.sign(document, process.env.JWT_SECRET)
    },

    verifyJWT: (token) => {
        return jwt.verify(helper.headerValueParser(token), process.env.JWT_SECRET);
    },

    headerValueParser: (headerValue) => {
        let index = headerValue.indexOf('=');
        return headerValue.substring(index);
    }
}