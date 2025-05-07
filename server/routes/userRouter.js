import { Router } from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
// route to check if user is logged in based on jwt; on client check will be sent with every request
// and rewrite jwt on every request (refresh)
router.get('/auth', authMiddleware, userController.check);

export default router;
