import express from 'express';
import User from '../models/user.model';

export const testUser = (req, res) => {
  return res.json({'success': true, 'message': 'User route works'});
}

export const setup = (req, res) => {
  let chris = new User({
    name: 'Chris Buggy',
    password: 'password',
    admin: true
  });

  //saving chris to db
  chris.save(function(err){
    if(err){
      console.log(err);
      return res.json({'success': false, 'message': 'error with test user that aint good'});
    } else {
      console.log(chris.name + ' has been added');
      return res.json({'success': true, 'message': chris});
    }
  })
}

export const showUsers = (req, res) => {
  User.find({}, function(err, users){
    res.json(users);
  });
};
