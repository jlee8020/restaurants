const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema ({
    adds: {
        street : String, 
        city: String, 
        state : String, 
        zip: Number
    }
})


const restaurantSchema = new mongoose.Schema({
    name: {type: String,},
    adds: [addressSchema],  
},{
 timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema)