const mongoose = require('mongoose');


const restaurantSchema = new mongoose.Schema({
    name: {type: String,},
    street:{type: String}, 
    city: {type: String}, 
    state:{type: String}, 
    zip:  {type: Number},  
},{
 timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema)