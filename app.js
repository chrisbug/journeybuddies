import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import Group from './models/groups.model';

import SourceMapSupport from 'source-map-support';
import config from './config';
import User from './models/user.model';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';
import index from './routes/index';

const app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);
// set the port
const rooms = [];
const port = process.env.PORT || 8080;

const apiRoutes = express.Router();

//Connect to mongoose
mongoose.connect(config.database);
//Allows crocs read up on best practice
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
  });

  socket.on('room', function(room){
    console.log('new room');
    socket.join(room);
  });

  socket.on('disconnect', () =>{
    console.log('User Disconnect');
  });
})



http.listen(port, () => {
  console.log('Server runnong on port: ' + port)
});