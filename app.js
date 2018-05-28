var express = require('express');
var exphbs  = require('express-handlebars');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var Joi = require('joi');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

var routers = require('./routes/index');
var users = require('./routes/users');

// view engine
app.set("views", path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// public path
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));
app.use(cookieParser());

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());


// connect flash
app.use(flash());

// Global variable
app.use(function (req, res, next) {
    res.locals.testVar = "tasfin";
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})


// set routes
app.use('/', routers);
app.use('/users', users);

// set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
    console.log('Server started on port '+app.get('port')+'...');
});
