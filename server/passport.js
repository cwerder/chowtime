var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var NewUser = require('./database/models');
var toToken = require('./helpers').toJWT;


passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    (email, password, done) => {
        NewUser.findOne({
            email: email,
            password: password
        }, (err, user) => {
            console.log('passport user', user);
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            return done(null, toToken(user.toJSON()));
        })
    })
);

passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    (email, password, done) => {
        NewUser.findOne({
            email: email
        }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false);
            }

            const newUser = new NewUser({email: email, password: password});
            newUser.save((error, registeredUser) => {
                if (error) {
                    return console.error(error);
                }
                return done(null, toToken(registeredUser.toJSON()));
            });
        })
    }
));


passport.serializeUser((user, done)=>{
    console.log('serialize', user)
    done(null, user);
});

passport.deserializeUser((user, done)=>{
    console.log('deserialize', user)
    done(null, user);
});
