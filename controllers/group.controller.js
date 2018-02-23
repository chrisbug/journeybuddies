import express from 'express';
import Group from '../models/groups.model';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const createGroup = (req, res) =>{
  console.log("making new group started")
  if(!req.body.email || !req.body._id){
    return res.status(400).json({success: false, message:'Error with object'})
  } else {
    console.log("making new group")
    let newgroup = new Group ({
      admin: req.body._id,
      users: [req.body.email]
    })
    newgroup.save(function(err){
      if(err){
        console.log(err);
        return res.status(500).json({success: false, message:'Error saving group to db'})
      } else{
        return res.status(201).json({success: true, message: 'Group Created'})
      }
    });
  }
}

export const addUserToGroup = (req, res) => {
  console.log("adding a user to group")
  if(!req.body.email || !req.body.groupid){
    let userEmail = req.body.email;
    return res.status().json({success: false, message:'Error with request'})
  } else {
    Group.findById(req.body.groupid , function(err, group){
      if(err){
        return res.status(404).json({'success': false, 'message': 'error try again'});
      } else {
        let addUser  = true;
        for(let username of group.users){
          if(username == req.body.email){
            addUser = false;
          }
        }
        if(addUser){
          group.users.push(req.body.email);
          for(let user of group.users){
            User.findOne({email: user}, function(err, user){
              if(err){
                return res.status(404).json({'success': false, 'message': 'error adding user to groups'})
              }
              if(!user){
                return res.status(404).json({'success': false, 'message': 'user not found'})
              } else {
                  console.log(user)
                  user.groups.push(group._id)
                  user.save();
              }
            })
          }
        }
        group.save();
        return res.status(201).json({'success': true, 'message':'user added to group', group})
      }
    })

  }
}
