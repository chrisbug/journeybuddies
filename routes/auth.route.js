import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router()

router.use(authController.apiRoute);

router.route('/testy')
  .get(authController.Testy)

export default router;
