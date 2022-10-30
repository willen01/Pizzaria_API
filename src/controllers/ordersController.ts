import { Request, Response } from "express";
import { OrdersRepository } from "../repository/orderRepository";
import { OrdersUseCase } from "../useCases/OrdersUseCase";

const orders = new OrdersUseCase(new OrdersRepository());

export class OrdersController {
  async create(request: Request, response: Response): Promise<void> {
    const orderData = request.body;
    try {
      await orders.create(orderData);
      response.status(201).json({ msg: "order created successfully" });
    } catch (error) {
      response.status(400).json({ error });
    }
  }

  async list(_: Request, response: Response): Promise<Response> {
    try {
      const allOrders = await orders.list();
      return response.status(200).json({ allOrders });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async listOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const order = await orders.listOne(+id);
      return response.status(200).json({ order });
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}
