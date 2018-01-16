import express from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';

export const testUser = (req, res) => {
  return res.json({'success': true, 'message': 'User route works'});
}

export const setup = (req, res) => {
  let chris = new User({
    name: 'Chris Buggy',
    password: 'password',
    admin: true,
    jwt: ''
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

export const signupUser = (req, res) => {
  let newuser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    groupId: '',
    admin: false,
    jwt: ''
  });

  User.findOne({
    username: newuser.username
  },
  function(err, user){
    if(err){
      return res.json({'success': false, 'message': 'error try again'});
    } if(!user){
        newuser.save(function(err){
          if(err){
            console.log(err);
            return res.json({'success': false, 'message': 'error with test user that aint good'});
          } else {
              console.log(newuser.username + ' has been added');
              return res.json({'success': true, 'message': newuser.username + ' has been added to db'});
            }
        });
    } else {
        return res.json({'suucess': false, 'message': 'error user already exists'})
      }
      });
}

export const showUsers = (req, res) => {
  User.find({}, function(err, users){
    res.json(users);
  });
};

export const authenticateUser = (req, res) => {
  let name = req.body.username;
  let password = req.body.password;
  User.findOne({
    username: username
  },
  function(err, user){
    if(err){
      console.log('error');
      res.json('error on searching');
    } if(!user){
      res.json({success: false, message: 'authenticate failed user not found.'});
    } else if (user){
      //check password here
      if(user.password != password){
        res.json({success: false, message: 'Authhenication failed invalid password'});
      } else {
        // if user is found and password is right
        // create a token with only our given payload
        // don't pass in the entire user since that has the password
        const payload ={
          admin: user.admin
        };
        //supper secret will become a private key read in
        let token = jwt.sign(payload, 'superSecret',
        {
          expiresIn: 1440 // one day.
        });

        //store token in user in DB
        //User.update( {_id:user._id}, {jwt: token});
        user.jwt = token;
        user.save()
        console.log(user);

        //return the infomation including token as jsonwebtoken
        res.json({
          success: true,
          message: 'Enjoy your token',
          token: token
        });

      }
    }
  });
}
