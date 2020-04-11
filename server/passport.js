var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const validator = require("credentials-validator");
const bcrypt = require('bcrypt');
const saltRounds = 10;

var User = require('./database/models');
var toToken = require('./helpers').toJWT;
validator.setSettings(require('./validation-settings'));

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    (email, password, done) => {
        User.findOne({
            email: email
        }, async (err, user) => {
            console.log('passport user', user);
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }

            const match = await bcrypt.compare(password, user.password);
 
            if (match) {
                return done(null, toToken(user.toJSON()));
            } else {
                console.log('no password match')
                return done(null, false);
            }
        })
    })
);

passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    (email, password, done) => {
        User.findOne({
            email: email
        }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false);
            }
            let userIsValid = true;
            const potentialUser = new User({email: email, password: password});
            
            validator.checkEmail(potentialUser.email, (error) => {
                userIsValid = false;
                console.table(error);
            })
            validator.checkPassword(potentialUser.password, (error) => {
                userIsValid = false;
                console.table(error);
            })
            if (!userIsValid) {
                return done(null, false);
            }

            // generate a salt and hash password
            bcrypt.genSalt(saltRounds, function(e, salt) {
                if (e) {
                    console.error(e);
                    console.log('oye', e)
                    return done(null, false);
                }
                bcrypt.hash(potentialUser.password, salt, function(err, hashedPassword) {
                    if (err) {
                        console.error(err);
                        return done(null, false);
                    }
                    potentialUser.password = hashedPassword;
                    // Store hash in your password DB.
                    potentialUser.save((error, registerUser) => {
                        if (error) {
                            console.error(error);
                            return done(null, false);
                        }
                        return done(null, toToken(registerUser.toJSON()));
                    });
                });
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
