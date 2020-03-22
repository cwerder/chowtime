var NewUser = require('../database/models');

module.exports = {
    register: (req, res) => {
        console.log('hit register controller');

        const newUser = new NewUser(req.body);

        newUser.save((error, user) => {
          if (error) {
            return console.error(error);
          }
          console.log('User successfully added:', user);
          res.send(user);
        });
    }
}