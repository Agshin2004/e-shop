import { Router } from "express";
import cartController from '../controllers/cartController.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.post('/', authMiddleware, cartController.addToCard);
router.get('/', authMiddleware, cartController.getMyCartItems);

export default router;