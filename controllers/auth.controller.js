import express from 'express';
import User from '../models/user.model';
//import userRoutes from './routes/user.route';
import jwt from 'jsonwebtoken';



export const apiRoute = function(req, res, next){
  let secert = 'superSecret';
  //Check for token in body, query or headers
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  //decode the token
  if(token){

    //verfies secerte
    jwt.verify(token, secert, function(err, decoded){
      if(err){
        return res.json({success: false, message: 'failed to authenticate token.'});
      } else {
        //if the token is verfied save the request for use in other authRoutes
        req.decoded = decoded;
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
};

export const Testy = (req, res) => {
  return res.json({'success': true, message: 'Auth works!!!!'});
}
