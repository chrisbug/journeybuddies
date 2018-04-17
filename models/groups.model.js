var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Set up the user model it is basic for now
module.exports = mongoose.model('Group', new Schema({
  name: String,
  admin: String,
  users: [String],
  meetingpoint : {
    name: String,
    lat: Number,
    lng: Number
  },
  tasks: [ {
      taskTitle: String,
      taskDescription: String,
      taskfor: String,
      completed: Boolean
    }],
  messages: [{
    username: String,
    text: String
  }]
}));
