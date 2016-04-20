var express = require('express');
var controller = express.Router();
var DBSchema = require('../models/schema');

controller.get('/', function(req, res, next) {

  DBSchema.Location.find({}, function(err, location) {
    res.json(location);
  });

});

controller.get('/testing/', function(req, res, next) {
  DBSchema.Location.find({}).populate('image').exec(function(err, location) {
    if (err) {
      console.log(err);
    }
    res.json(location);
  });
});


controller.get('/:id', function(req, res, next) {
  var id = req.params.id
  DBSchema.Location.findOne({location_id: id}).populate('image').exec(function(err, location) {
    res.json(location);
  });

});

controller.post('/post', function(req, res, next) {
  var locationInfo = {
    location_id: req.body.location_id,
    intersection: req.body.intersection,
    art_piece_name: req.body.art_piece_name,
    artist: req.body.artist,
    description: req.body.description,
    directions: req.body.directions,
    isApproved: true
  };
  var locations = new DBSchema.Location(locationInfo)
  locations.save(function (err) {
    if (err) {
      return console.log(err);
    } else {
      res.json({'message': 'You have successfully submited a location'});
    }
  });
  // DBSchema.Location.create(locationInfo, function(error, location) {
  //   console.log(location);
  //   res.json({ 'message': 'You have succesfully created a location!'});
  // });

});

module.exports = controller;
