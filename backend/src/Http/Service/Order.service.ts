import { PrismaClient } from "@prisma/client";
import { IOrder, IOrderService } from "../../Interface";

export default class OrderService implements IOrderService {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAllOrder(): Promise<IOrder[]> {
    const orders = await this.prisma.orders.findMany({
      include: {
        buyer: true,
        cnpj: true,
        provider: true,
      },
    });

    console.log(orders);

    return orders;
  }

  async getOrderById(id: Number): Promise<IOrder | Error> {
    if (id === null || id === undefined || typeof id !== "number") {
      throw Error("Id no formato errado");
    }

    const orderById = await this.prisma.orders.findFirst({
      where: { id },
      include: {
        buyer: true,
        cnpj: true,
        provider: true,
      },
    });

    if (orderById === null) {
      throw Error("Id não encontrado");
    }

    return orderById;
  }
}
