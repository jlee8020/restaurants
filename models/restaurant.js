const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
        street: {type: String},
        city:{type: String},
        state:{type: String},
        zip:{type: Number}
});
const restaurantSchema = new mongoose.Schema({
    name: {type: String,required: true},
    addresses: [addressSchema],
    experiences: {},
    // experiences: [experienceSchema],
    users: {},

})

module.exports = mongoose.model('Restaurant', restaurantSchema)