import { IPizza } from "../entities/Pizzas";
import { Pizza } from "../protocols/Pizza";

export class ListPizzaUseCase {
  constructor(private readonly repository: Pizza) {}

  async list(): Promise<IPizza[]> {
    return await this.repository.list();
  }
}
