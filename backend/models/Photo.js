const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;