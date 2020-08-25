var express = require('express');
var router = express.Router();
var Waiter=require('../models/waiter');
var Staff=require('../models/staff');
var Restaurant = require('../models/restaurant');
const restaurant_admin = require('../models/restaurant_admin');

/*methods for waiters*/

/* GET methods */
router.get('/', function(req, res, next) {
  res.send('restaurant_admin is called');
});

router.get('/waiter', function(req, res, next) {
  Waiter.find().sort('username').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

/*  router.get('/restaurantwaiter', function(req, res, next) {
  Restaurant.find({}).populate('restaurant_waiter').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});   */ 

/* POST methods */
router.post('/addwaiter', function(req, res, next) {
  Waiter.create(req.body).then((waiter)=>{
      console.log('waiter has been added', waiter);
      res.statusCode=200;
      res.setHeader('content-type', 'application/json');
      res.json(waiter);
    }, (err) => next(err)).catch((err)=>next(err));
});


/* delete methods */
router.delete('/delwaiter/:id', function(req, res, next) {
  Waiter.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

/*put methods*/

router.put('/restaurant/:rid/waiter/:wid', function(req, res, next) {
  Restaurant.findOneAndUpdate({ _id: req.params.rid }, { 
    
      "$push": {
          "restaurant_waiter": {
              "wid": req.params.wid
          }
      }
  }, { new: true, upsert: false },
     function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  }); 
  
 
});


/*methods for staff*/
router.get('/staff', function(req, res, next) {
  Staff.find().sort('username').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});



/* POST methods */
router.post('/addstaff', function(req, res, next) {
  Staff.create(req.body).then((staff)=>{
      console.log('staff has been added', staff);
      res.statusCode=200;
      res.setHeader('content-type', 'application/json');
      res.json(staff);
    }, (err) => next(err)).catch((err)=>next(err));
});






/* delete methods */
router.delete('/delstaff/:id', function(req, res, next) {
  Staff.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

router.delete('/delwaiter/:id', function(req, res, next) {
    Waiter.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
  });


router.put('/restaurant/:rid/staff/:sid', function(req, res, next) {
  Staff.findOneAndUpdate({ _id: req.params.rid }, { 
    
      "$push": {
          "restaurant_staff": {
              "sid": req.params.wid
          }
      }
  }, { new: true, upsert: false },
     function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  }); 
  
 
});


module.exports = router;
