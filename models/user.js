const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    avatar: String,
    googleId: String,
    //student fact Schema facts:[(factSchema)]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)