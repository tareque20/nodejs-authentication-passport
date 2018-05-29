var express = require('express');
var Joi = require('joi');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');

var User = require('../models/user');

// Register
router.get('/register', function (req, res) {
    res.render('register');
});

// Login
router.get('/login', function (req, res) {
    res.render('login');
});

// Register
router.post('/register', function (req, res) {
    var name = req.body.name;
    //var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var confpassword = req.body.confpassword;

    const schema = {
        name: Joi.string().min(3).required(),
        //email: Joi.string().min(3),
        username: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        confpassword: Joi.string().min(3).required(),
    };

    const result = Joi.validate(req.body, schema);
    if(result.error){
        res.render('register', {
            errors: result.error.details[0].message
        });
    }
    else{
        var newUser = new User({
            name: name,
            //email: email,
            username: username,
            password: password
        });

        User.createUser(newUser, function (err, user) {
            if (err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'Registration has been successfully completed');
        res.redirect('/users/login');
    }

});

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }

            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
    function (req, res) {
    console.log(req);
        res.redirect('/');
    });

router.get('/logout', function (req, res) {
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/login');
});

module.exports = router;
