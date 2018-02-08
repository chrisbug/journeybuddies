// index.js

//This is just for organisation and reporting
describe('Our application', function(){
  //This is the name of the test
  it('Should understant basic mathemtaical principles',function(done){

    //passing test
    if(5===5){
      //If the bebavior is as expected, call done with no argument
      done();
    } else {
      //otherwise call done with an error.
      done(new Error("NOt sure what happend"));
    }
  });

describe('Second sample', function(){
  it('Should pass even though it throws an error')

  if(5 == 3){
    throw new Error("Oh no");
  }
})
});
