import { Router } from "express";
import brandRouter from "./brandRouter.js";
import deviceRouter from "./deviceRouter.js";
import typeRouter from './typeRouter.js'
import userRouter from "./userRouter.js";
import cartRouter from './cartRouter.js';


const router = new Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/cart', cartRouter);

export default router;