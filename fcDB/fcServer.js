// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/fcdb');

var User       = require('./app/models/user');
var Feat       = require('./app/models/feat');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8003;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/feat')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        console.log(req);
        var feat = new Feat(req.body);
       
        // save the bear and check for errors
        feat.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Feat created!' });
        });
        
    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        var featList = [];
        Feat.find(function (err, result) {
            if(err) {
                console.log(err);
            } else if(result.length) {
                res.json(result);
                console.log(result);
            } else {
                featList = { "message": "Nothing Found"};
            }
        });

        /*Feat.find(function(err, feat) {
            if (err)
                res.send(err);

            res.json(feat);
        });
        */
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/feats/:feats')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        User.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
