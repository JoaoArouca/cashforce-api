import { Router } from "express";
import orderRouter from "./OrderdRouter";
import providerRouter from "./ProviderRouter";

const router = Router();

router.use("/order", orderRouter);
router.use("/provider", providerRouter);

export default router;
