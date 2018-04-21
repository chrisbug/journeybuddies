import express from 'express';
import AWS from 'aws-sdk';
import config from '../config/awsbucket';
import multer from 'multer';
import multerS3 from 'multer-s3';
import fs from 'fs';
import Busboy from 'busboy';
import S3FS from 's3fs';
import multiparty from 'connect-multiparty';

const s3fsImpl = new S3FS('journeybuddiesfyp', { 
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey
});
//s3fsImpl.create();


// var config = AWS.Config({
//   accessKeyId: config.accessKeyId, 
//   secretAccessKey: config.secretAccessKey, 
//   region: config.region
// });
console.log(__dirname);
AWS.config.loadFromPath('./config/awsconfig.json');

const Bucket_Name = 'journeybuddiesfyp';
const IAM_USER_KEY = config.accessKeyId;
const IAM_USER_SECRET = config.secretAccessKey;

const s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: Bucket_Name
});

const upload = multer({
  dest: 'uploads/'
  // storage: multer.memoryStorage(),
  // limits: { fileSize: 52428800}
});

export const mobileUploads = (req, res) => {
  let file = req.file;
  console.log(file);
  console.log(req);
  console.log('that was a file');
  let originalname = JSON.stringify(Date.now());
  const path = req.file.filename + '/' + originalname;
  var stream = fs.createReadStream(path);
  s3fsImpl.writeFile(path, stream, ).then(
    fs.unlink(path, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.status(201);
      }
    })
  )
  res.status(200).json();
}

export const uploadFile = (req, res) => { 
  console.log(req.file);
  console.log(req.body.id);
  const path = req.body.groupid + '/' + req.file.originalname;
  var stream = fs.createReadStream(req.file.path);
  s3fsImpl.writeFile(path, stream,).then(
    fs.unlink(req.file.path, function(err){
      if(err) {
        console.log(err);
      } else {
        res.status(201);
      }
    })
  )
  res.status(201).json();
  // upload.single('req.body.file');
  // const data = { Bucket: Bucket_Name, Key: req.body.file.name, Body: req.body.file};
  // s3bucket.putObject(data, function(err, data){
  //   if(err){
  //     console.log('error uploading');
  //     console.log(err)
  //     res.status(404);
  //   } else {
  //     console.log('message uploading');
  //     res.status(201);
  //   }
  // });
}

export const getGroupImages = (req, res) => {
  if(req.body.groupid || req.headers['groupid']){
    const groupid = req.body.groupid || req.headers['groupid'];
    const images = [];
    const bucketurl = 'https://s3-eu-west-1.amazonaws.com/journeybuddiesfyp/' + groupid + '/'
    s3fsImpl.readdir(groupid).then(function(files){
      console.log(files);
      files.forEach(function(element){
        images.push(bucketurl + element);
      })
      res.status(201).json(images);
    })
  } else {
    console.log(req.headers['token']);
    console.log(req.headers['groupid']);
    res.status(201);
  }
}

export const removeImage = (req, res) => {
  if (!req.headers['groupid'] || !req.headers['filename']) {
    return res.status(404);
  } else {
    const path = req.headers['filename'];
    console.log(path);
    s3fsImpl.unlink(path, function (err) {
      if (err) {
        console.log(err)
        res.status(404)
      } else {
        res.status(201).json();
      }
    });
  }
}
