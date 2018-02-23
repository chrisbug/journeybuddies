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
  .get(userController.getUser);

router.route('/creategroup')
  .post(groupController.createGroup);

router.route('/addusertogroup')
  .put(groupController.addUserToGroup);

export default router;
