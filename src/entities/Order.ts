import { IPizzaOrder } from "./PizzaOrder";

export interface IOrder {
  client: string;
  adress: string;
  phone: string;
  payment_method: string;
  content: IPizzaOrder[];
}
