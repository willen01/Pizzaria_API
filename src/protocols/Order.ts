import { IOrder } from "../entities/Order";

export interface Order {
  create(order: IOrder): Promise<void>;
  list(): Promise<IOrder[]>;
  listOne(id: number): Promise<IOrder | null>;
}
