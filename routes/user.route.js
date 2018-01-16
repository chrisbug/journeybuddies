import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  .get(userController.testUser);

router.route('/showusers')
  .get(userController.showUsers);

router.route('/authenticate')
  .post(userController.authenticateUser);

router.route('/signup')
  .post(userController.signupUser);

export default router;
