import { IPizza } from "../entities/Pizzas";

export interface Pizza {
  list(): Promise<IPizza[]>;
}
