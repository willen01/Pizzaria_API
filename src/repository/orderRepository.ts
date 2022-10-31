import { PrismaClient } from "@prisma/client";
import { IOrder } from "../entities/Order";
import { IPizzaOrder } from "../entities/PizzaOrder";
import { Order } from "../protocols/Order";

const prismaClient = new PrismaClient();

export class OrdersRepository implements Order {
  async create(order: IOrder): Promise<void> {
    await prismaClient.orders.create({
      data: {
        ...order,
        content: {
          createMany: {
            data: order.content,
          },
        },
      },
    });
  }

  async list(): Promise<IOrder[]> {
    return await prismaClient.orders.findMany({ include: { content: true } });
  }

  async listOne(id: number): Promise<IOrder | null> {
    return await prismaClient.orders.findUnique({
      where: { id },
      include: { content: true },
    });
  }
}
