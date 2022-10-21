import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prismaClient = new PrismaClient();

export class PizzariaController {
  async listPizzas(_: Request, response: Response) {
    try {
      const pizzas = await prismaClient.pizza.findMany();
      response.status(200).json(pizzas);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async createOrder(request: Request, response: Response) {
    const { client, adress, phone, payment_method, pedido } = request.body;

    try {
      const registerOrder = await prismaClient.orders.create({
        data: {
          client,
          adress,
          phone,
          payment_method,
          content: {
            createMany: {
              data: pedido,
            },
          },
        },
      });

      response.status(201).json(registerOrder);
    } catch (err) {
      response.status(500).json(err);
    }
  }

  async listOrderById(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const order = await prismaClient.orders.findFirst({
        where: {
          id: +id,
        },
        include: {
          content: true,
        },
      });
      response.status(201).json(order);
    } catch (err) {
      response.status(500).json(err);
    }
  }

  async listOrders(_: Request, response: Response) {
    try {
      const orders = await prismaClient.orders.findMany({
        include: {
          content: true,
        },
      });

      response.status(200).json(orders);
    } catch (err) {
      response.status(500).json(err);
    }
  }
}
