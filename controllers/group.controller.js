import express from 'express';
import Group from '../models/groups.model';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const createGroup = (req, res) =>{
  console.log("making new group started")
  if (!req.body.email || !req.body._id || !req.body.groupname){
    console.log(req.body.groupname);
    return res.status(404).json({success: false, message:'Error with object'})
  } else {
    console.log("making new group")
    let newgroup = new Group ({
      name: req.body.groupname,
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
          user.groups.push(newgroup);
          user.save(function(err, updateduser){
            if (err){
              console.log(err);
              res.status(404).json();
            } else{
              console.log(updateduser.groups);
            }
          });
        });
        return res.status(200).json(newId);
      }
    });
  }
}

export const getGroup = (req, res) => {
  if(req.body._id || req.headers['id']){
    let id  = req.body._id || req.headers['id'];
    Group.findById(id, function(err, group){
      if(err){
        res.status(404).json({success: false, message:'no user found with id'})
      } else{
        res.status(200).json({
          groupname: group.groupname,
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
    console.log(req.body.groupid);
    console.log('missing required');
    return res.status(404).json({success: false, message:'Error with request'})
  } else {
    let userEmail = req.body.email;
    Group.findById(req.body.groupid , function(err, group){
      if(err){
        console.error(err);
        return res.status(404).json({'success': false, 'message': 'error try again'});
      }
      else if(!group){
        console.log('no group found with ' + req.bod.groupid);
        res.status(404);
      } 
      else {
        let addUser  = true;
        for(let username of group.users){
          console.log(username);
          console.log(req.body.email);
          if(username === req.body.email){
            console.log('user not being added')
            addUser = false;
          }
        }
        if(addUser){
          console.log('working on group ' + group.name)
          group.users.push(req.body.email);
          for(let user of group.users){
            User.findOne({email: user}, function(err, user){
              console.log('USER FOUND')
              if(err){
                return res.status(404).json({'success': false, 'message': 'error adding user to groups'})
              }
              if(!user){
                return res.status(404).json({'success': false, 'message': 'user not found'})
              } else {
                console.log('working with user ' + user.email);
                let addUserToGroup = true;
                console.log(user.groups);
                for(let val of user.groups){
                  console.log("checking values here");
                  console.log(group._id);
                  console.log(val._id);
                  if(group.name === val.name){
                    addUserToGroup = false;
                  }
                }
                  if(addUserToGroup){
                    console.log('adding ' + group.name + ' to user ' + user.email);
                    user.groups.push(group);
                    user.save();
                    console.log('user Saved');
                  }
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

export const getGroupMessages = (req, res) => {
  if(req.headers['groupid']){
    let id = req.headers['groupid'];
    console.log(id);
    Group.findById(id, function(err, group){
      console.log(group);
      if(err){
        return res.status(404);
      } else {
        console.log(group.messages);
        return res.status(201).json(group.messages);
      }
    })
  }
  return res.status(201);
}

export const setGroupMeetingPoint = (req, res) => {
  if (req.body.groupid || req.headers['groupid']) {
    let id = req.body.groupid || req.headers['groupid'];
    let meetingpoint;
    if (req.body.marker){
      meetingpoint = req.body.marker;
    } else {
      meetingpoint = {
        name: 'error',
        lat: 0,
        lng: 0
      }
    }
    Group.findById(id, function(err, group){
      group.meetingpoint = meetingpoint;
      console.log(group.meetingpoint);
      group.save();
      console.log('done setting group')
      return res.status(201).json(true);
    })
  } else { return res.status(404).json(false);}
}

export const getGroupMeetingPoint = (req, res) => {
  console.log(req.body.groupid);
  if (req.body.groupid || req.headers['groupid']) {
    let id = req.body.groupid || req.headers['groupid'];
    Group.findById(id, function (err, group) {
      console.log('done getting group: ' + group.meetingpoint);
      return res.status(201).json(group.meetingpoint);
    })
  } else { return res.status(404).json({
      name: "no meeting point",
      lat: 0,
      lng: 0
      });
    }
}

export const getTasks = (req, res) => {
  if (req.body.groupid || req.headers['groupid']){
    let id = req.body.groupid || req.headers['groupid']
    Group.findById(id, function (err, group) {
      if(err){
        return res.status(404)
          .json([{ taskTitle: 'error', taskDescription: 'try reloading tasks', taskfor: 'no one', completed: false}]);
      }
      console.log('sending group taks: ' + id);
      console.log(group.tasks);
      return res.status(201).json(group.tasks);
    });
  } else {
    return res.status(201)
      .json([{ taskTitle: 'error', taskDescription: 'try reloading tasks', taskfor: 'no one', completed: false }]);
  }
}

export const addtask = (req, res) => {
  if (req.body.groupid || req.headers['groupid']){
    let id = req.body.groupid || req.headers['groupid']
    Group.findById(id, function (err, group) {
      if(err){
        return res.status(201).json(false);
      }
      group.tasks.push(req.body.task)
      group.save();
      return res.status(201).json(true);
    });
  }else {
    return res.status(404).json(false);
  }
}

export const markTaskComplete = (req, res) => {
  if (req.body.groupid || req.headers['groupid']) {
    let id = req.body.groupid || req.headers['groupid']
    Group.findById(id, function (err, group) {
      if (err) {
        return res.status(201).json(false);
      }
      console.log(group.tasks);
      for(let task of group.tasks){
        //using shallow copies to just resign boolean object within reference 
        if(task.taskTitle == req.body.taskTitle){
          task.completed = true;
        }
      }
      console.log(group.tasks);
      group.save();
      return res.status(201).json(true);
    });
  } else {
    return res.status(404).json(false);
  }
}

export const deleteTask = (req, res) => {
  console.log(req.headers);
  if (req.body.groupid || req.headers['groupid']) {
    let id = req.body.groupid || req.headers['groupid']
    const taskTitle = req.body.taskTitle || req.headers['tasktitle']
    Group.findById(id, function (err, group) {
      if (err) {
        return res.status(201).json(false);
      }
      for (let i = 0; i < group.tasks.length; i++){
        if (group.tasks[i].taskTitle === taskTitle){
          group.tasks.splice(i, 1);
          group.save();
          return res.status(201).json(true);
        }
      }
      res.status(404).json(false);
    });
  } else {
    return res.status(404).json(false);
  }
}