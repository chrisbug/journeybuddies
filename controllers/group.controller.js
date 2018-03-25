import express from 'express';
import Group from '../models/groups.model';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const createGroup = (req, res) =>{
  console.log("making new group started")
  if(!req.body.email || !req.body._id){
    return res.status(404).json({success: false, message:'Error with object'})
  } else {
    console.log("making new group")
    let newgroup = new Group ({
      admin: req.body._id,
      users: [req.body.email]
    });
    newgroup.save(function(err, group){
      if(err){
        console.log(err);
        return res.status(500).json({success: false, message:'Error saving group to db'})
      } else{
        let newId = group._id;
        User.findById(group.admin, function(err, user){
          user.groups.push(newId);
          user.save(function(err, updateduser){
            if (err){
              res.status(404).json();
            } else{
              console.log(user.groups);
            }
          });
        });
        return res.status(200).json(group._id);
      }
    });
  }
}

export const getGroup = (req, res) => {
  if(req.body._id || req.headers['_id']){
    let id  = req.body._id || req.headers['_id'];
    Group.findById(id, function(err, group){
      if(err){
        res.status(404).json({success: false, message:'no user found with id'})
      } else{
        res.status(200).json({
          id: group._id,
          admin: group.admin,
          users: group.users,
          meetingpoint: group.meetingpoint
        });
      }
    })
  }
  else{
    res.status(403).json({success: false, message:'No ids'})
  }
}

export const addUserToGroup = (req, res) => {
  console.log("adding a user to group")
  if(!req.body.email || !req.body.groupid){
    return res.status().json({success: false, message:'Error with request'})
  } else {
    let userEmail = req.body.email;
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
        return res.status(201).json(group);
      }
    })

  }
}

export const setGroupMeetingPoint = (req, res) => {
  if (req.body.groupid || req.headers['groupid']) {
    let id = req.body.groupid || req.headers['groupid'];
    let meetingpoint;
    if(req.body.meetingpoint){
      meetingpoint = req.body.meetingpoint;
    } else {
      meetingpoint = {
        name: 'error',
        lat: 0,
        lng: 0
      }
    }
    Group.findById(id, function(err, group){
      group.meetingpoint = meetingpoint;
      group.save();
      console.log('done setting group')
      return res.status(201);
    })
  } else { return res.status(404);}
}

export const getGroupMeetingPoint = (req, res) => {
  if (req.body.groupid || req.headers['groupid']) {
    let id = req.body.groupid || req.headers['groupid'];
    group.findById(id, function (err, group) {
      console.log('done getting group')
      return res.status(201).json(group.meetingpoint);
    })
  } else { return res.status(404).json({
      name: "no meeting point",
      lat: 0,
      lng: 0
      });
    }
}