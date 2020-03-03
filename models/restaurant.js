const mongoose = require('mongoose');

const addSchema = new mongoose.Schema({
        street: {type: String},
        city:{type: String},
        state:{type: String},
        zip:{type: Number}
});
const restaurantSchema = new mongoose.Schema({
    name: {type: String,required: true},
    addresses: [addSchema],
    experiences: {},
    // experiences: [experienceSchema],
    users: {},

},{
 timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema)