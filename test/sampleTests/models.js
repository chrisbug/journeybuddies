// models.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Solves mpromise warning
mongoose.Promise = global.Promise;

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Email address is required'
  },
  password: {
    type: String,
    required: 'user validation failed'
  }
});

exports.registerModels = function() {
  try {
    mongoose.model('user', userSchema);
  } catch (error) {
    // console.log(error)
  }
}
