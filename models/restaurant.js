const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {type: String,required: true},
    street: {type: String},
    city: {String},
    state: {String},
    zip:{Number},
    experiences: {},
    // experiences: [experienceSchema],

    users: {},


})

module.exports = mongoose.model('Restaurant', restaurantSchema)