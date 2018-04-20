import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import Group from './models/groups.model';

import SourceMapSupport from 'source-map-support';
import config from './config/config';
import User from './models/user.model';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';
import index from './routes/index';
import fs from 'fs';

const key = fs.readFileSync('./key/private.key');
const cert = fs.readFileSync('./key/server.crt');
const ca = fs.readFileSync('./key/server.crt');
const options = {
  key: key,
  cert: cert,
  ca: ca
}
const app = express();
var https = require('https').Server(options, app)
var http = require('http').Server(app)
var io = require('socket.io')(https);
// set the port
const rooms = [];
const port = process.env.PORT || 443;
const appPort = 80;

const apiRoutes = express.Router();

//Connect to mongoose
mongoose.connect(config.database);
//Allows crocs read up on best practice
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
  next();
})
//set up bodyParser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//set up morgan to Requests to console
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

// add Source Map Support
SourceMapSupport.install();
//Tester connection
app.get('/', index);

//app.use('/api/auth', authRoutes);
app.use('/api/user/', userRoutes);


app.use('/api/', authRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
// app.listen(port,() => {
//   console.log(`App Server Listening at ${port}`);
// });

//Building Socket connections for with socket.io for group rooms
console.log(rooms.length);
Group.find({}, function(err, groups){
  for (let group of groups){
  //console.log("setting up room ");
  //console.log(group._id);
  rooms.push(group._id);
  }
});

const nsp = io.of('/rooms');
nsp.on('connection', (socket) => {
  console.log('Chats are running');

  socket.on('add-message', (message, username, room) => {
    //nsp.emit('message', {type: 'new-message', text: message, username: username})
    console.log(message);
    nsp.to(room).emit('message' + room, { type: 'new-message', text: message, username: username })
    console.log('message'+room)
    Group.findById(room, function (err, group) {
      if (err) {
        console.log(err);
      }
      group.messages.push({ username: username, text: message });
      console.log(group.messages);
      group.save();
    });
  });

  socket.on('room', function(room){
    console.log('new room');
    socket.join(room);
  });

  socket.on('disconnect', () =>{
    console.log('User Disconnect');
  });
})

http.listen(appPort, () =>{
  console.log('app server listening')
} )

https.listen(port, () => {
  console.log('Server runnong on port: ' + port)
});