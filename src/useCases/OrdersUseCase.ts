import { IOrder } from "../entities/Order";
import { Order } from "../protocols/Order";

export class OrdersUseCase {
  constructor(private readonly repository: Order) {}

  async create(order: IOrder): Promise<void> {
    await this.repository.create(order);
  }

  async list(): Promise<IOrder[]> {
    return await this.repository.list();
  }

  async listOne(id: number): Promise<IOrder | null> {
    const findOrder = await this.repository.listOne(id);

    if (findOrder == null) throw new Error("order not found");

    return await this.repository.listOne(id);
  }
}
