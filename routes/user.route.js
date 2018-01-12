import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  .get(userController.testUser);

router.route('/setup')
  .get(userController.setup);

router.route('/showusers')
  .get(userController.showUsers);

export default router;
