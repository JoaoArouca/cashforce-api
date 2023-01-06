import { Router } from "express";
import OrderController from "../../Http/Controller/Order.controller";
import OrderService from "../../Http/Service/Order.service";

const orderRouter = Router();

const service = new OrderService();
const Order = new OrderController(service);

orderRouter.get("/", (req, res) => Order.getAllOrders(req, res));

export default orderRouter;
