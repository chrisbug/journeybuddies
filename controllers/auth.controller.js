import express from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  User.findOne({
    name: name
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
        var token = jwt.sign(payload, 'superSecret',
        {
          expiresIn: 1440 // one day.
        });

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
