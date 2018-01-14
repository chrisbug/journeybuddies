import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';


import config from './config';
import User from './models/user.model';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';



const app = express();
// set the port
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
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//set up morgan to Requests to console
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

//Tester connection
app.get('/', function(req, res){
  res.send('Hello api is working');
});

//app.use('/api/auth', authRoutes);
app.use('/user', userRoutes);

app.use('/api', authRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
