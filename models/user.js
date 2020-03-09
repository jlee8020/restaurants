const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    avatar: String,
    googleId: String,
    favorites: [{type: mongoose.Schema.Types.ObjectId, ref: "Restaurant"}]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)