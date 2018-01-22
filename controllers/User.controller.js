import express from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';



export const signupUser = (req, res) => {
  let newuser = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    groupId: '',
    admin: false,
    jwt: '',
    salt : null,
    hash: null,
  });
  newuser.salt = crypto.randomBytes(16).toString('hex');
  newuser.hash = crypto.pbkdf2Sync(req.body.password, newuser.salt, 1000, 64, 'sha512').toString('hex');

  User.findOne({
    email: newuser.email
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
              console.log(newuser.firstName + ' has been added');
              return res.json({'success': true, 'message': newuser.email + ' has been added to db'});
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
  let email = req.body.email;
  let passwordCheck = function(user,password){
    let hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64, 'sha512').toString('hex');
    if(user.hash === hash){
      return true;
    } else {
      return false;
    }
  }

  User.findOne({
    email: email
  },
  function(err, user){
    if(err){
      console.log('error');
      res.json('error on searching');
    } if(!user){
      res.json({success: false, message: 'authenticate failed user not found.'});
    } else if (user){
      //check password here
      if(!passwordCheck(user, req.body.password)){
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
