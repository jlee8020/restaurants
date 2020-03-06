const Restaurant = require('../models/restaurant');

module.exports = {
    index,
    new: newRestaurant,
    create,
    show,
    delete: deleteOne,
    showUpdate,
    update,
    edit,
    addFave,
    allRestaurants,
}

function index(req, res) {
    Restaurant.find({}, function(err, restaurants) {
        if (err) {
            console.log(err);
        } else {
        res.render('restaurants/index', {title: 'Restaurant List', restaurants, user: req.user});
        }
    });
}

function newRestaurant(req, res) {
    res.render('restaurants/new');
  }

//creating new restaurant
  function create(req, res) {
    var restaurant = new Restaurant(req.body);
    console.log(req.body);
    //added to assign the logged in user's id
    restaurant.user = req.user._id;
    restaurant.save(function(err) {
        if (err) {
            console.log(err)
            return res.render('restaurants/new');}

            else{

            
//need to add custom error here//
            console.log('Added restaurant to database: ' + restaurant);
        // res.redirect('/restaurants/index');
            // res.direct('/restaurants');
            res.redirect(`/restaurants/${restaurant._id}`);
            }

    })

}

//editimg a restaurant
function edit(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
      // Verify book is "owned" by logged in user
      if (!restaurant.user.equals(req.user._id)) return res.redirect('/restaurants');
      res.render('restaurants/edit', {restaurant});
    });
  }

//adding to fave restaurant
function addFave(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
        // Ensure that user is not already in fave list
        // See "Finding a Subdocument" in https://mongoosejs.com/docs/subdocs.html
        if (restaurant.usersFave.id(req.user._id)) return res.redirect('/restaurants');
        restaurant.usersFave.push(req.user._id);
        restaurant.save(function(err) {
        res.redirect(`/restaurants/${restaurant._id}`);
        });
    });
    }

//view all restaurants based on name search

function allRestaurants(req, res) {
    // Make the query object to use with Restaurant.find based upon
    // if the user has submitted via a search form for a restaurant name
    let restaurantQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    Restaurant.find(restaurantQuery, function(err, restaurants) {
        // Why not reuse the books/index template?
        res.render('/restaurants/index', {
        restaurants,
        user: req.user,
        nameSearch: req.query.name  // use to set content of search form
        });
    });
    }

// ${restaurant._id}
function show(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
      res.render('restaurants/show', { title: 'Restaurant Detail', restaurant, user: req.user});
    });
  }

function deleteOne(req, res) {
Restaurant.findByIdAndDelete(req.params.id, function(err, restaurant){
    if (err) {
        console.log(err);
    } else {
    console.log('deleting: ' + restaurant);
    }
})
res.redirect('/restaurants')
}

function showUpdate(req,res){
    Restaurant.findById(req.params.id, function (err, restaurant){
        if (err){
            console.log(err);

        }else{
            res.render('restaurants/update', {title: 'Edit Restaurant', restaurant})
        }
    });
}


function update(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
       
      // Verify book is "owned" by logged in user
      if (!restaurant.user.equals(req.user._id)) {
          return res.redirect('/restaurants')
    }else{

        req.body.user = req.user._id
        // req.body._id = req.params.id
        Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, restaurant) {

            res.redirect(`/restaurants/${req.params.id}`)
        })

        // restaurant.save(function (err, saveRestaurant){

        //     if (err){
        //         console.log(err)
        //         res.redirect(`/update/${restaurant._id}`)
        //     } else{
        //     }
        // })
    }
  })
}
//   router.put('/update/:id', restaurantsCtrl.update);

// function update(req, res) {    
//     if
//     Restaurant.findByIdAndUpdate(req.params.id, function(err, restaurant) {

//             name: req.body.name,
//             cuisine: req.body.cuisine,
//             category: req.body.category,
//             street: req.body.street,
//             city: req.body.city,
//             state: req.body.state,
//             zip: req.body.zip
            
//         },
//         {new: true},
//         function(err, response) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.redirect('/restaurants')
//             }
//         })
// }
// Student.findByIdAndUpdate(req.params.id, req.body,
//     {new: true})
