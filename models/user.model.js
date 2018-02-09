var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Group = require('./groups.model');

//Set up the user model it is basic for now
module.exports = mongoose.model('User', new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  groups: [],
  admin: Boolean,
  salt: String,
  hash: String
}));
