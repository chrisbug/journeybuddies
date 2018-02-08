var express = require('express');

describe('Our application', function(){
  var app,
      date;

  //Timeout for tests that take Time!
  this.timeout(5000);

  //Called once before any of the tests in this block begin.
  before(function(done){
    app = express();
    //Any asynchronous action with a callback.
    app.listen(3001, function(err){
      if(err) { return done(err);}
      done();
    });
  });

  //Called once before each of thetests in this block
  beforeEach(function(){
    data = new Date();
  });

  //Called after all of the tests in this block complete
  after(function(){
    console.log('Our application tests done!');
  });

  //Called once after each of theses tests in this block
  afterEach(function(){
    console.log("This date for that one was", date);
  });

  it('Should understand basic Mathemtaical principles', function(){
    //We want a pass
    if(5 == 3){
      //Hope we dont get here.
      throw new Error('OH NO ');
    }
  });

  it('Should understand basic truths', function(){
    //We want tests to pass.
    if(false){
      throw new Error('Oh no.');
    }
  });

  describe('(deeper)', function(){
    //Called once before any of the tests in this block begin.
    before(function(){
      console.log("Begin going deeper!")
    });

    it('should perform basic math', function(){
      //We want tests to passing
      if(1+1 !=2){
        throw new Error("Oh. no.");
      }
    });

    it('Should perform basic counting', function(){
      //We want tests to pass.
      if('abc'.length != 3){
        //Hope we dont get here
        throw new Error('nope');
      }
    });
  });
});
