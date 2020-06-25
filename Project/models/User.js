const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String
});

var User = mongoose.model('User'. UserSchema);

module.exports = User;
