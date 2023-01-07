import { Request, Response } from "express";
import { IOrderController, IOrderService } from "./../../Interface/index";

export default class OrderController implements IOrderController {
  private Service;

  constructor(OrderService: IOrderService) {
    this.Service = OrderService;
  }

  async getAllOrders(
    _req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const orders = await this.Service.getAllOrder();

      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getOrderById(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { id } = req.params;
      const order = await this.Service.getOrderById(Number(id));

      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
