const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    content: String,
    rating: {
      type: String,

    }
  }, {
    timestamps: true
  });

const restaurantSchema = new mongoose.Schema({
    name: {type: String},
    category: {String},
    street:{type: String}, 
    city: {type: String}, 
    state:{type: String}, 
    zip:  {type: Number},
    experiences : [experienceSchema]
  
    
},{
 timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema)