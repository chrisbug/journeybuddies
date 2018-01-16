var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Set up the user model it is basic for now
module.exports = mongoose.model('User', new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  groupId: String,
  admin: Boolean,
  jwt: String
}));
