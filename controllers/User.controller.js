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
    groups: [],
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

export const getUser = (req, res) => {
  if(req.body._id || req.headers['_id']){
    let id = req.body._id || req.headers['_id'];
    console.log('In the if')
    User.findOne({_id: id}, function(err, user){
      if(err){
        console.log("error with findOne")
        res.status(404).json({success: false, message:'no user found with ID' + this.id})
      }
      console.log(" no error with find")
      res.status(200).json({success:true, user:{
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        admin: user.admin,
        groups: user.groups
      }})
    })
  }
  else if(req.email){
    User.findOne({email:req.body.email}, function(err, user){
      if(err){
        res.status(404).json({success: false, message:'no user found with email'})
      } else{
        res.status(200).json({success:true, user:{
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          admin: user.admin,
          groups: user.groups
        }})
      }
    })
  } else{
    res.status(403).json({success: false, message:'no user with'})
  }
}

export const authenticateUser = (req, res) => {
  console.log(req.body.email);
    if(!req.body.email || !req.body.password){
      res.json({success: false, message: 'Missing required Items'})
    } else {
      let token;
      User.findOne({email: req.body.email}, function(err, user){
        if(err){
          console.log('error');
        }if(!user){
            console.log('no user');
            res.status(404).json({success: false, message: 'authenticate failed user not found.'});
          } else if (user){
            console.log(user)
            var hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64, 'sha512').toString('hex');
            if(hash === user.hash){
              token = genToken(user);
              console.log('Sending token to user')
              console.log(token)
              res.status(201).json({
                success: true,
                message: "Yep",
                token: token,
                user: {
                  _id : user._id,
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName
                }
              });
            }
          } else {
            res.status(401).json({success: false, message: 'Authhenication failed invalid password'});
            }
      });
    }
}

export const getUserGroups = (req, res) => {
  if(req.body._id || req.headers['_id']){
    let id = req.body._id || req.headers['_id'];
    User.findById(id, function(err, user){
      if(err){
        res.status(404).json({success: false, message:'no user found with id'})
      } else {
        res.status(201).json({success: true, message:"user found", group: user.groups})
      }
    });
  } else{
    res.status(404).json({success: false, message:'no user found with id'})
  }
}
