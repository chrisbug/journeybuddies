//All routes that need authentication needs to be placed in here.

import express from 'express';
import * as authController from '../controllers/auth.controller';
import * as userController from '../controllers/user.controller';
import * as groupController from '../controllers/group.controller';

const router = express.Router()

router.use(authController.apiRoute);

router.route('/testy')
  .get(authController.Testy)

router.route('/showusers')
  .get(userController.showUsers);

router.route('/getuser')
  .post(userController.getUser);

router.route('/getusergroups')
  .post(userController.getUserGroups);

router.route('/creategroup')
  .post(groupController.createGroup);

router.route('/addusertogroup')
  .put(groupController.addUserToGroup);

router.route('/getmeetingpoint')
  .post(groupController.getGroupMeetingPoint)

router.route('/setmeetingpoint')
  .post(groupController.setGroupMeetingPoint)

router.route('/gettasks')
  .post(groupController.getTasks)

router.route('/addtask')
  .post(groupController.addtask)

router.route('/marktaskcomplete')
  .post(groupController.markTaskComplete)

router.route('/deletetask')
  .post(groupController.deleteTask)

export default router;
