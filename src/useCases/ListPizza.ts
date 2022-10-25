import { IPizza } from "../entities/Pizzas";
import { PizzaRepository } from "../repository/pizzaRepository";

export class ListPizzaUseCase {
  constructor(private readonly repository: PizzaRepository) {}

  async list(): Promise<IPizza[]> {
    return await this.repository.list();
  }
}
