var express = require('express');
var controller = express.Router();
var DBSchema = require('../models/schema');

controller.get('/', function(req, res, next) {

  DBSchema.Image.find({ isApproved: true }, function(err, image) {
    res.json(image);
  });

});

controller.post('/post', function(req, res, next) {

  var imageInfo = {
    username: req.body.username,
    location_id: req.body.location_id,
    date: req.body.date,
    image: req.body.image,
    isApproved: false
  };

  DBSchema.Image.create(imageInfo, function(error, image) {
    console.log(image);
    res.json({ 'message': 'You have succesfully submitted an image!'});
  });

});


module.exports = controller;
