const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    content: String,
    rating: {
      type: String,

    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    username: { String,

  }
  }, {
    timestamps: true
  });

const restaurantSchema = new mongoose.Schema({
    name: {type: String},
    category: {String},
    cuisine: {String},
    street:{type: String}, 
    city: {type: String}, 
    state:{type: String}, 
    zip:  {type: Number},
    experiences : [experienceSchema],
    userRecommending: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    userFave: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    
},{
 timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema)