import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  .get(userController.testUser);

export default router;
