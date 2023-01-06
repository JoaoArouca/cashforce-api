import { Router } from "express";
import orderRouter from "./Order";

const router = Router();

router.use("/order", orderRouter);

export default router;
