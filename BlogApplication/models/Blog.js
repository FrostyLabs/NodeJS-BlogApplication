var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', BlogSchema);
