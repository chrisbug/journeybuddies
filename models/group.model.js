var mongoose = require('mongoose');
var Schema = mongoose.Schema;
import User from './user.model';
//Set up the user model it is basic for now
module.exports = mongoose.model('Group', new Schema({
  groupname: String,
  admin: String

}));
