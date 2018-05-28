const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    /*email: {
        type: String,
        required: true
    },*/
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const User = module.exports = mongoose.model('User', userSchema);

// Get User
module.exports.getUsers = function (callback, limit) {
    User.find(callback).limit(limit);
}

// Get User
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

// Add User
module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.passport, salt, function(err, hash) {
            // Store hash in your password DB.
            newUser.passport = hash;
            User.create(newUser, callback);
        });
    });
}

// getUserByUsername
module.exports.getUserByUsername = function (username, callback) {
   var query = {username: username};

   User.findOne(query, callback);
}
// comparePassword
module.exports.comparePassword = function (userPassword, hash, callback) {
    // Load hash from your password DB.
    bcrypt.compare(userPassword, hash, function(error, isMatch) {
        // res === true
        if (error) {
            throw error;
        }

        callback(null, isMatch);

    });
}