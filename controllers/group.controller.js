import express from 'express';
import Group from '../models/groups.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const createGroup = (req, res) =>{
  if(!req.body.email || req.body._id){
    return res.json({success: false, message:'Error with object'})
  } else {
    let newgroup = new group ({
      admin: req.body._id,
      users: [req.body.email]
    })
    newgroup.save(function(err){
      if(err){
        console.log(err);
        return res.status(400).json({success: false, message:'Error saving group to db'})
      } else{
        return res.status(201).json({success: true, message: 'Group Created'})
      }
    });
  }
}
