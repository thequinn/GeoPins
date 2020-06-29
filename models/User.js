const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String
});

// Method #1:
var User = mongoose.model('User', UserSchema);
module.exports = User;
// Method #2:
//module.exports = mongoose.model("User", UserSchema);
