var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
const validator = require("credentials-validator");
const bcrypt = require('bcrypt');
const saltRounds = 10;

var LocalUser = require('./database/models').LocalUserModel;
var TwitterUser = require('./database/models').TwitterUserModel;
var toToken = require('./helpers').toJWT;
validator.setSettings(require('./validation-settings'));

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    },
    (req, email, password, done) => {
        LocalUser.findOne({
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
                if (!user.sessions.includes(req.sessionID)) {
                    user.sessions.push(req.sessionID);
                }
                user.save((err, updateUser) => {
                    if (err) {
                        console.error(err);
                        return done(null, false);
                    }
                    return done(null, toToken(updateUser.toJSON()));
                });
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
        LocalUser.findOne({
            email: email
        }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false);
            }
            let userIsValid = true;
            const potentialUser = new LocalUser({email: email, password: password});
            
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

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/oauth/twitter/callback"
  }, function(token, tokenSecret, profile, done) {
    TwitterUser.findOne({ twitter_profile_id: profile.id }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        const registerUser = new TwitterUser({ twitter_profile_id: profile.id });
        registerUser.save((error, newUser) => {
        if (error) {
            console.error(error);
            return done(null, false);
        }
        done(null, toToken(newUser.toJSON()));
        });
      } else {
        done(null, toToken(user.toJSON()));
      }
    });
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
