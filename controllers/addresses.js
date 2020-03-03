const Restaurant = require('..models/restaurant')
module.exports = {
    create,
}

function create(req,res){
    console.log(req.body);
    Restaurant.findbyId(req.params.id, function(err, restaurant){
        restaurant.adds.$push(adds);
        restaurant.save(function(err){
            if (err) return res.redirect(`/restaurants/${req.params.id}`);
            res.redirect(`restaurants/${req.params.id}`);
        });
    });
};