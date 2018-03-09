import express from 'express';
import User from '../models/user.model';
//import userRoutes from './routes/user.route';
import jwt from 'jsonwebtoken';

export const apiRoute = function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(req.body._id || req.headers["_id"]){
      console.log('auth with id');
      let id = req.body._id || req.headers['_id'];
      User.findById(id,
        function(err, user){
          if(err){
            console.log('error on search');
            res.json('error on searching db')
          }
          if(!user){
            res.json({success: false, message: 'No user found for auth'});
          }
          else if(user){
            //decode the token
            if(token){
              console.log(token);
              console.log(user.salt)
                //verfies secerte
              jwt.verify(token, user.salt, function(err, decoded){
              if(err){
                console.log(err);
                return res.json({success: false, message: 'failed to authenticate token.'});
                }
                else {
                  //if the token is verfied save the request for use in other authRoutes
                  req.decoded = decoded;
                  console.log("decoded")
                  next();
                }
                });
              } else {
                //if there is no token return error
                  return res.status(200).send({
                    success: false,
                    message: 'No token provided'
                  });
                }
            }
          });
    } else if (req.body.email || req.header['email']) {
          let email = req.body.email || req.header['email'];
            User.findOne({email: email}, function (err, user) {
                if (err) {
                  console.log('error on search');
                  res.json('error on searching db')
                }
                if (!user) {
                  res.json({ success: false, message: 'No user found for auth' });
                }
                else if (user) {
                  //decode the token
                  if (token) {
                    console.log(token);
                    console.log(user.salt)
                    //verfies secerte
                    jwt.verify(token, user.salt, function (err, decoded) {
                      if (err) {
                        console.log(err);
                        return res.json({ success: false, message: 'failed to authenticate token.' });
                      }
                      else {
                        //if the token is verfied save the request for use in other authRoutes
                        req.decoded = decoded;
                        console.log("decoded")
                        next();
                      }
                    });
                  } else {
                    //if there is no token return error
                    return res.status(403).send({
                      success: false,
                      message: 'No token provided'
                    });
                  }
                }
              });
          } else {
          return res.status(200).json();
        }
};

export const Testy = (req, res) => {
  return res.json({'success': true, message: 'Auth works!!!!'});
}
