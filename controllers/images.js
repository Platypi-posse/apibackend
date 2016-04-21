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
    isApproved: true
  };
  var images = new DBSchema.Image(imageInfo)
  DBSchema.Location.findOne({location_id: images.location_id}, function(err, location) {
    if (err) console.log(err);
    location.image.push(images._id);
    location.save(function (err) {
      if (err) {
        return console.log(err);
      } else {
        images.save(function (err) {
          if (err) {
            return console.log(err);
          } else {
            res.json({'message': 'You have successfully submitted an image'});
          }
        });
      }
    });
  });

  // DBSchema.Image.create(imageInfo, function(error, image) {
  //   console.log(image);
  //   res.json({ 'message': 'You have succesfully submitted an image!'});
  // });

});


module.exports = controller;
