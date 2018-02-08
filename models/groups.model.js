var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Set up the user model it is basic for now
module.exports = mongoose.model('Group', new Schema({
  users: [String]
}));
