const mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: {type: String,required: true},
    street: {type: String, default: '123 Main'},
    city: {String, default: 'Austin'},
    state: {String, default: 'TX'},
    zip:{number},
})

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    avatar: String,
    googleId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Restaurant', restaurantSchema)