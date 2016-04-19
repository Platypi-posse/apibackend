var mongoose = require('mongoose');
// locationSchema

var locationSchema = new mongoose.Schema({
  location_id: Number,
  intersection: String,
  art_piece_name: String,
  artist: [],
  description: String,
  directions: String
});

var Location = mongoose.model('Location', locationSchema);

// imageSchema

var imageSchema = new mongoose.Schema({
  username: String,
  location_id: String,
  date: Date,
  image: String,
  isApproved: Boolean
});

var Image = mongoose.model('Image', imageSchema);

module.exports = {
  Location: Location,
  Image: Image
};
