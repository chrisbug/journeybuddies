import User from '../models/user.model';
import Group from '../models/group.model';

var expect = require('chai').expect
  mongoose = require('mongoose');


describe('Models', function(){
  var User;

  beforeEach(function(done){
    mongoose.connect('mongodb://localhost/test_mocha_example');
    mongoose.connection.once('connected', () => {
      mongoose.connection.db.dropDatabase();

      require('../models/user.model').registerModels();
      require('../models/group.model').registerModels();
      //This is the true right model because reighster is at the test_mocha_example
      User = mongoose.model('user');
      Group = mongoose.model('')
      done();
    });
  });

  afterEach(function(done){
    mongoose.disconnect();
    done();
  });

  describe('Lifecycle', function(){
    it('should not save without password', function(done){
      var user = new User({
        email: 'chris@chris.com'
      });
      user.save(function(err){
        expect(err).to.exist
          .and.be.instanceof(Error);
          //.and.have.property('message', 'user validation failed');
        done();
      })
    })
  })

  describe('adding user to group', function){
    it('should recive a 200 message', function(done){

    });
  }
})
