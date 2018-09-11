const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user.model');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.find({id : {id}})
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local(passport);
    kakao(passport);
}

