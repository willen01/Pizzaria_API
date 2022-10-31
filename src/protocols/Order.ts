import { IOrder } from "../entities/Order";
import { IPizzaOrder } from "../entities/PizzaOrder";

export interface Order {
  create(order: IOrder): Promise<void>;
  list(): Promise<IOrder[]>;
  listOne(id: number): Promise<IOrder | null>;
}
