import { Router } from "express";
import orderRouter from "./OrderdRouter";
import providerRouter from "./ProviderRouter";
import userRouter from "./UserRouter";

const router = Router();

router.use("/order", orderRouter);
router.use("/provider", providerRouter);
router.use("/user", userRouter);

export default router;
