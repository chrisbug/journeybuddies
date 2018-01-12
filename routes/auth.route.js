import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router()

router.route('/authenticate')
  .post(authController.authenticateUser);

export default router;
