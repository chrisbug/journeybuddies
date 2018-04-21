//All routes that need authentication needs to be placed in here.

import express from 'express';
import multer from 'multer';
import * as authController from '../controllers/auth.controller';
import * as userController from '../controllers/user.controller';
import * as groupController from '../controllers/group.controller';
import * as imageController from '../controllers/image.controller';

const router = express.Router()
const upload = multer({
  dest: 'uploads/'
});
//router.use(multipartyMiddleware);
router.use(authController.apiRoute);

router.route('/testy')
  .get(authController.Testy)

router.route('/showusers')
  .get(userController.showUsers);

router.route('/getuser')
  .get(userController.getUser);

router.route('/getusergroups')
  .post(userController.getUserGroups);

router.route('/creategroup')
  .post(groupController.createGroup);

router.route('/addusertogroup')
  .post(groupController.addUserToGroup);

router.route('/getmeetingpoint')
  .get(groupController.getGroupMeetingPoint)

router.route('/setmeetingpoint')
  .post(groupController.setGroupMeetingPoint)

router.route('/gettasks')
  .get(groupController.getTasks)

router.route('/addtask')
  .post(groupController.addtask)

router.route('/marktaskcomplete')
  .post(groupController.markTaskComplete)

router.route('/deletetask')
  .delete(groupController.deleteTask)

router.route('/getmessages')
  .get(groupController.getGroupMessages)

router.route('/uploadimage')
  .post(upload.single('image'), imageController.uploadFile)

router.route('/getimages')
  .get(imageController.getGroupImages)

router.route('/removeimage')
  .delete(imageController.removeImage)

router.route('/mobileimageupload')
  .post(upload.single('image'), imageController.mobileUploads)

export default router;
