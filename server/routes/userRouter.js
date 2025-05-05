import { Router } from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
// route to check if user is logged in based on jwt
router.get('/auth', authMiddleware, userController.check);

export default router;
