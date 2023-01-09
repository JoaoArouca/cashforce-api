import { Router } from "express";
import cnpjRouter from "./CnpjRouter";
import orderRouter from "./OrderdRouter";
import providerRouter from "./ProviderRouter";
import userRouter from "./UserRouter";

const router = Router();

router.use("/order", orderRouter);
router.use("/provider", providerRouter);
router.use("/user", userRouter);
router.use('/cnpj', cnpjRouter);

export default router;
