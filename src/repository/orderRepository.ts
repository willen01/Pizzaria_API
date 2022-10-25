import { PrismaClient } from "@prisma/client";
import { IOrder } from "../entities/Order";
import { Order } from "../protocols/Order";

const prismaClient = new PrismaClient();

export class OrdersRepository implements Order {
  async create(order: IOrder): Promise<void> {
    await prismaClient.orders.create({ data: { ...order } });
  }

  async list(): Promise<IOrder[]> {
    return await prismaClient.orders.findMany();
  }

  async listOne(id: number): Promise<IOrder | null> {
    return await prismaClient.orders.findUnique({ where: { id } });
  }
}
