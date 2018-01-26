import express from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const genToken = function(user){
  let payload ={
    admin: user.admin
  };
    return jwt.sign(payload, user.salt,
    {
      expiresIn: 1440*1000 // one day.
    })
  }

export const signupUser = (req, res) => {
  let newuser = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    groupId: '',
    admin: false,
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
              let token = genToken(newuser)
              console.log(newuser.firstName + ' has been added');
              return res.json({'success': true, 'message': newuser.email + ' has been added to db', 'token': token });
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

export const authenticateUser = (req, res, err) => {
  let email = req.body.email;
  let passwordCheck = function(user,password){
    let hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64, 'sha512').toString('hex');
    if(user.hash === hash){
      return true;
    } else {
      return false;
    }
  }
  if(err){
    console.log('error');
    console.log(err);
    res.json({success: false, message:'internal error'});
  } else {
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
          let token = genToken(user);
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
}
