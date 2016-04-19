var express = require('express');
var controller = express.Router();
var DBSchema = require('../models/schema');

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.send("The Server is working!");
});

module.exports = controller;
